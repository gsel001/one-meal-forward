import { readdir } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';

const files = await readdir('tests');
if (files.some((name) => /^test_.*\.py$/.test(name))) {
  const result = spawnSync(
    'python3',
    ['-m', 'unittest', 'discover', '-s', 'tests', '-p', 'test_*.py'],
    { stdio: 'inherit' },
  );
  if (result.error) throw result.error;
  process.exitCode = result.status ?? 1;
} else {
  console.log('Python safety tests skipped: no test_*.py files on this branch.');
}
