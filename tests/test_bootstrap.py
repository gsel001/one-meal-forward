"""Regression tests for the safe, one-time GitHub bootstrap."""
import json
import subprocess
import sys
import tempfile
import unittest
from pathlib import Path

SCRIPT = Path(__file__).resolve().parents[1] / "scripts" / "configure-github.py"


class BootstrapSafetyTests(unittest.TestCase):
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


if __name__ == "__main__":
    unittest.main()
