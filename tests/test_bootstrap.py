"""Regression tests for the safe, one-time GitHub bootstrap."""
import importlib.util
import io
import json
import os
import subprocess
import sys
import tempfile
import unittest
from pathlib import Path
from contextlib import chdir, contextmanager, redirect_stderr, redirect_stdout
from unittest.mock import call, patch

SCRIPT = Path(__file__).resolve().parents[1] / "scripts" / "configure-github.py"


class BootstrapSafetyTests(unittest.TestCase):
    def load_script(self):
        spec = importlib.util.spec_from_file_location("bootstrap", SCRIPT)
        module = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(module)
        return module

    @contextmanager
    def repository(self, module, root):
        with chdir(root), patch.object(module, "REPOSITORY_ROOT", root.resolve()):
            yield

    def prepare_empty_repository(self, root):
        (root / "package.json").write_text('{"name":"one-meal-forward"}')
        tasks = [{"title": "Check public links", "body": "Review official URLs.",
                  "labels": ["good first issue"]}]
        launch_tasks = root / "scripts" / "launch-issues.json"
        launch_tasks.parent.mkdir()
        launch_tasks.write_text(json.dumps(tasks))
        return tasks

    def run_script(self, root, *arguments):
        return subprocess.run(
            [sys.executable, str(SCRIPT), *arguments],
            cwd=root, text=True, capture_output=True, check=False
        )

    def repository_contents(self, root):
        return {path.relative_to(root): path.read_bytes() if path.is_file() else None
                for path in root.rglob("*")}

    def test_default_does_not_need_gitHub_credentials_or_write_files(self):
        with tempfile.TemporaryDirectory() as folder:
            root = Path(folder)
            result = self.run_script(root)
            self.assertEqual(result.returncode, 0, result.stderr)
            self.assertIn("DRY RUN", result.stdout)
            self.assertEqual(list(root.iterdir()), [])
            module = self.load_script()
            with chdir(root), patch.object(module, "api") as api, redirect_stdout(io.StringIO()):
                self.assertEqual(module.main([]), 0)
            api.assert_not_called()
            self.assertEqual(list(root.iterdir()), [])

    def test_apply_abbreviation_is_rejected_before_any_side_effect(self):
        with tempfile.TemporaryDirectory() as folder:
            root = Path(folder)
            self.prepare_empty_repository(root)
            module = self.load_script()
            original_contents = self.repository_contents(root)
            errors = io.StringIO()
            with self.repository(module, root), patch.object(module, "api") as api, \
                 redirect_stderr(errors), self.assertRaises(SystemExit) as error:
                module.main(["--ap"])
            self.assertEqual(error.exception.code, 2)
            self.assertIn("unrecognized arguments: --ap", errors.getvalue())
            api.assert_not_called()
            self.assertEqual(self.repository_contents(root), original_contents)

    def test_apply_preserves_existing_missions_without_network_access(self):
        with tempfile.TemporaryDirectory() as folder:
            root = Path(folder)
            data = root / "site" / "data"
            data.mkdir(parents=True)
            manifest = data / "missions.json"
            original = '[{"id":"org-verified-1","partner":"must be preserved"}]\n'
            manifest.write_text(original, encoding="utf-8")
            module = self.load_script()
            output = io.StringIO()
            with self.repository(module, root), patch.object(module, "api") as api, \
                 redirect_stdout(output):
                self.assertEqual(module.main(["--apply"]), 0)
            api.assert_not_called()
            self.assertIn("EXISTING SITE PRESERVED", output.getvalue())
            self.assertEqual(manifest.read_text(encoding="utf-8"), original)

    def test_dangling_catalogue_symlink_blocks_apply_before_api_calls(self):
        with tempfile.TemporaryDirectory() as folder:
            root = Path(folder)
            self.prepare_empty_repository(root)
            module = self.load_script()
            manifest = root / module.MANIFEST
            manifest.parent.mkdir(parents=True)
            manifest.symlink_to("missing.json")
            with self.repository(module, root), patch.object(module, "api") as api, \
                 redirect_stdout(io.StringIO()):
                self.assertEqual(module.main(["--apply"]), 0)
            api.assert_not_called()
            self.assertEqual(manifest.readlink(), Path("missing.json"))

    def test_apply_refuses_wrong_working_directory_before_api_calls(self):
        with tempfile.TemporaryDirectory() as folder:
            root = Path(folder)
            self.prepare_empty_repository(root)
            module = self.load_script()
            errors = io.StringIO()
            with chdir(root), patch.object(module, "api") as api, \
                 redirect_stderr(errors), self.assertRaises(SystemExit) as error:
                module.main(["--apply"])
            self.assertEqual(error.exception.code, 2)
            self.assertIn("repository root", errors.getvalue())
            api.assert_not_called()

    def test_malformed_later_task_is_rejected_before_any_side_effect(self):
        with tempfile.TemporaryDirectory() as folder:
            root = Path(folder)
            tasks = self.prepare_empty_repository(root)
            module = self.load_script()
            tasks.append({"title": "Missing a body", "labels": []})
            (root / module.LAUNCH_TASKS).write_text(json.dumps(tasks))
            original_contents = self.repository_contents(root)
            errors = io.StringIO()
            with self.repository(module, root), patch.object(module, "api") as api, \
                 redirect_stderr(errors), self.assertRaises(SystemExit) as error:
                module.main(["--apply"])
            self.assertEqual(error.exception.code, 2)
            self.assertIn("Launch task 2 must have a nonempty body string.", errors.getvalue())
            api.assert_not_called()
            self.assertEqual(self.repository_contents(root), original_contents)

    def test_cli_pins_github_hostname(self):
        module = self.load_script()
        response = subprocess.CompletedProcess([], 0, stdout='{"login":"gsel001"}')
        with patch.dict(os.environ, {"GH_HOST": "example.invalid"}), \
             patch.object(module.subprocess, "run", return_value=response) as run:
            self.assertEqual(module.api("user"), {"login": "gsel001"})
        self.assertEqual(run.call_args.args[0],
                         ["gh", "api", "--hostname", "github.com", "user", "--method", "GET"])

    def test_existing_issues_are_never_adopted_or_modified(self):
        # A matching title is insufficient, including for a closed PR.
        cases = [("untrusted-contributor", {}), ("gsel001", {}),
                 ("gsel001", {"state": "closed", "pull_request": {}})]
        for author, extra in cases:
            with self.subTest(author=author, extra=extra), tempfile.TemporaryDirectory() as folder:
                root = Path(folder)
                tasks = self.prepare_empty_repository(root)
                existing = [{"number": 999, "title": tasks[0]["title"],
                             "body": "Unreviewed replacement content",
                             "user": {"login": author}, **extra}]
                module = self.load_script()
                original_contents = self.repository_contents(root)
                errors = io.StringIO()
                with self.repository(module, root), \
                     patch.object(module, "api", side_effect=[{"login": "gsel001"}, existing]) as api, \
                     redirect_stderr(errors), self.assertRaises(SystemExit) as error:
                    module.main(["--apply"])
                self.assertEqual(error.exception.code, 2)
                self.assertIn("already has issues or pull requests", errors.getvalue())
                self.assertEqual(api.call_args_list, [
                    call("user"), call("repos/gsel001/one-meal-forward/issues?state=all&per_page=1")
                ])
                self.assertEqual(self.repository_contents(root), original_contents)

    def test_unexpected_issue_list_response_blocks_writes(self):
        with tempfile.TemporaryDirectory() as folder:
            root = Path(folder)
            self.prepare_empty_repository(root)
            module = self.load_script()
            errors = io.StringIO()
            with self.repository(module, root), \
                 patch.object(module, "api", side_effect=[{"login": "gsel001"}, None]) as api, \
                 redirect_stderr(errors), self.assertRaises(SystemExit) as error:
                module.main(["--apply"])
            self.assertEqual(error.exception.code, 2)
            self.assertIn("Unable to confirm", errors.getvalue())
            self.assertEqual(api.call_args_list, [
                call("user"), call("repos/gsel001/one-meal-forward/issues?state=all&per_page=1")
            ])
            self.assertFalse((root / "site").exists())

    def test_milestone_read_failure_occurs_before_label_writes(self):
        with tempfile.TemporaryDirectory() as folder:
            root = Path(folder)
            self.prepare_empty_repository(root)
            module = self.load_script()
            responses = [{"login": "gsel001"}, [], [], OSError("milestones unavailable")]
            with self.repository(module, root), patch.object(module, "api", side_effect=responses) as api, \
                 self.assertRaisesRegex(OSError, "milestones unavailable"):
                module.main(["--apply"])
            self.assertEqual(api.call_args_list, [
                call("user"),
                call("repos/gsel001/one-meal-forward/issues?state=all&per_page=1"),
                call("repos/gsel001/one-meal-forward/labels?per_page=100"),
                call("repos/gsel001/one-meal-forward/milestones?state=all&per_page=100"),
            ])
            self.assertFalse((root / "site").exists())

    def test_first_time_setup_creates_scaffolding_without_publishing_tasks(self):
        with tempfile.TemporaryDirectory() as folder:
            root = Path(folder)
            tasks = self.prepare_empty_repository(root)
            module = self.load_script()
            labels = [{"name": name} for name in module.LABELS if name != "good first issue"]
            launch_title, launch_description = module.MILESTONES[0]
            existing_milestones = [{"title": module.MILESTONES[1][0], "number": 2}]
            with self.repository(module, root), \
                 patch.object(module, "api", side_effect=[
                     {"login": "gsel001"}, [], labels, existing_milestones,
                     {}, {"number": 1}, {"number": 1000}
                 ]) as api, redirect_stdout(io.StringIO()):
                self.assertEqual(module.main(["--apply"]), 0)
            self.assertEqual(api.call_args_list, [
                call("user"),
                call("repos/gsel001/one-meal-forward/issues?state=all&per_page=1"),
                call("repos/gsel001/one-meal-forward/labels?per_page=100"),
                call("repos/gsel001/one-meal-forward/milestones?state=all&per_page=100"),
                call("repos/gsel001/one-meal-forward/labels", "POST", {
                    "name": "good first issue", "color": "7057ff", "description": "Good first issue"
                }),
                call("repos/gsel001/one-meal-forward/milestones", "POST", {
                    "title": launch_title, "description": launch_description
                }),
                call("repos/gsel001/one-meal-forward/issues", "POST", {
                    **tasks[0], "milestone": 1
                })
            ])
            self.assertEqual(json.loads((root / "site/data/missions.json").read_text()), [])


if __name__ == "__main__":
    unittest.main()
