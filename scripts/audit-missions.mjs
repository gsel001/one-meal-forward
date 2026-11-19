import { readFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
const issueUrlPattern = /^https:\/\/github\.com\/gsel001\/one-meal-forward\/issues\/([1-9]\d*)$/;
const apiBase = 'https://api.github.com/repos/gsel001/one-meal-forward/issues/';
export function actionableProjectIssues(missions, now = new Date()) {
  const today = now.toISOString().slice(0, 10);
  return missions.filter(m => m.kind === 'project' && m.status === 'verified' &&
    !m.example && typeof m.expiresAt === 'string' && m.expiresAt >= today);
}
export async function auditProjectIssues(missions, {
  fetchImpl = fetch, now = new Date(), token = process.env.GITHUB_TOKEN
} = {}) {
  const failures = [];
  for (const mission of actionableProjectIssues(missions, now)) {
    const match = issueUrlPattern.exec(mission.url ?? '');
    if (!match) {
      failures.push({ id: mission.id, reason: 'Not a canonical project issue URL' });
      continue;
    }
    const number = Number(match[1]);
    try {
      const headers = { Accept: 'application/vnd.github+json',
        'User-Agent': 'one-meal-forward-health-audit',
        'X-GitHub-Api-Version': '2022-11-28' };
      if (token) headers.Authorization = 'Bearer ' + token;
      const response = await fetchImpl(apiBase + number, {
        headers, signal: AbortSignal.timeout(12000)
      });
      if (!response.ok) {
        failures.push({ id: mission.id, reason: 'GitHub API HTTP ' + response.status });
        continue;
      }
      const issue = await response.json();
      if (issue.number !== number || issue.pull_request || issue.state !== 'open') {
        failures.push({ id: mission.id, reason: 'Issue #' + number + ' is not an open issue' });
      }
    } catch (error) {
      failures.push({ id: mission.id, reason: 'Issue availability could not be checked (' + (error?.name || 'network error') + ')' });
    }
  }
  return failures;
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const missions = JSON.parse(await readFile(new URL('../site/data/missions.json', import.meta.url), 'utf8'));
  const checked = actionableProjectIssues(missions);
  const failures = await auditProjectIssues(missions);
  console.log('Checked ' + checked.length + ' currently advertised project tasks.');
  for (const failure of failures) console.error(failure.id + ': ' + failure.reason);
  if (failures.length) {
    console.error('Review and update site/data/missions.json via a pull request. This audit never changes listings automatically.');
    process.exitCode = 1;
  }
}
