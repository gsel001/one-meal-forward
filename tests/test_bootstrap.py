"""Regression tests for the safe, one-time GitHub bootstrap."""
import importlib.util
import io
import json
import subprocess
import sys
import tempfile
import unittest
from pathlib import Path
from contextlib import redirect_stderr, redirect_stdout
from unittest.mock import call, patch

SCRIPT = Path(__file__).resolve().parents[1] / "scripts" / "configure-github.py"


class BootstrapSafetyTests(unittest.TestCase):
    def load_script(self):
        spec = importlib.util.spec_from_file_location("bootstrap", SCRIPT)
        module = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(module)
        return module

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

    def test_default_does_not_need_gitHub_credentials_or_write_files(self):
        with tempfile.TemporaryDirectory() as folder:
            root = Path(folder)
            result = self.run_script(root)
            self.assertEqual(result.returncode, 0, result.stderr)
            self.assertIn("DRY RUN", result.stdout)
            self.assertEqual(list(root.iterdir()), [])

    def test_apply_preserves_existing_missions_without_network_access(self):
        with tempfile.TemporaryDirectory() as folder:
            root = Path(folder)
            data = root / "site" / "data"
            data.mkdir(parents=True)
            manifest = data / "missions.json"
            original = '[{"id":"org-verified-1","partner":"must be preserved"}]\n'
            manifest.write_text(original, encoding="utf-8")
            result = self.run_script(root, "--apply")
            self.assertEqual(result.returncode, 0, result.stderr)
            self.assertIn("EXISTING SITE PRESERVED", result.stdout)
            self.assertEqual(manifest.read_text(encoding="utf-8"), original)

    def test_apply_refuses_wrong_working_directory_before_api_calls(self):
        with tempfile.TemporaryDirectory() as folder:
            result = self.run_script(Path(folder), "--apply")
            self.assertNotEqual(result.returncode, 0)
            self.assertIn("repository root", result.stderr)

    def test_existing_issues_are_never_adopted_or_modified(self):
        # A matching title is insufficient, regardless of the reported author.
        for author in ("untrusted-contributor", "gsel001"):
            with self.subTest(author=author), tempfile.TemporaryDirectory() as folder:
                root = Path(folder)
                tasks = self.prepare_empty_repository(root)
                existing = [{"number": 999, "title": tasks[0]["title"],
                             "body": "Unreviewed replacement content",
                             "user": {"login": author}}]
                module = self.load_script()
                original_files = {p.relative_to(root): p.read_bytes()
                                  for p in root.rglob("*") if p.is_file()}
                errors = io.StringIO()
                with patch.object(module, "MANIFEST", root / "site/data/missions.json"), \
                     patch.object(module, "LAUNCH_TASKS", root / "scripts/launch-issues.json"), \
                     patch.object(module, "api", side_effect=[{"login": "gsel001"}, existing]) as api, \
                     patch.object(module, "Path", side_effect=lambda p: root / p), \
                     redirect_stderr(errors), self.assertRaises(SystemExit) as error:
                    module.main(["--apply"])
                self.assertEqual(error.exception.code, 2)
                self.assertIn("already has issues or pull requests", errors.getvalue())
                self.assertEqual(api.call_args_list, [
                    call("user"), call("repos/gsel001/one-meal-forward/issues?state=all&per_page=1")
                ])
                self.assertEqual({p.relative_to(root): p.read_bytes()
                                  for p in root.rglob("*") if p.is_file()}, original_files)

    def test_first_time_setup_creates_scaffolding_without_publishing_tasks(self):
        with tempfile.TemporaryDirectory() as folder:
            root = Path(folder)
            tasks = self.prepare_empty_repository(root)
            module = self.load_script()
            labels = [{"name": name} for name in module.LABELS]
            milestones = [{"title": title, "number": i + 1}
                          for i, (title, _) in enumerate(module.MILESTONES)]
            with patch.object(module, "MANIFEST", root / "site/data/missions.json"), \
                 patch.object(module, "LAUNCH_TASKS", root / "scripts/launch-issues.json"), \
                 patch.object(module, "Path", side_effect=lambda p: root / p), \
                 patch.object(module, "api", side_effect=[
                     {"login": "gsel001"}, [], labels, milestones, {"number": 1000}
                 ]) as api, redirect_stdout(io.StringIO()):
                self.assertEqual(module.main(["--apply"]), 0)
            self.assertEqual(api.call_args_list, [
                call("user"),
                call("repos/gsel001/one-meal-forward/issues?state=all&per_page=1"),
                call("repos/gsel001/one-meal-forward/labels?per_page=100"),
                call("repos/gsel001/one-meal-forward/milestones?state=all&per_page=100"),
                call("repos/gsel001/one-meal-forward/issues", "POST", {
                    **tasks[0], "milestone": 1
                })
            ])
            self.assertEqual(json.loads((root / "site/data/missions.json").read_text()), [])


if __name__ == "__main__":
    unittest.main()
