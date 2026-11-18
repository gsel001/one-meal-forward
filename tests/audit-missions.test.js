import { test } from 'node:test';
import assert from 'node:assert/strict';
import { actionableProjectIssues, auditProjectIssues } from '../scripts/audit-missions.mjs';
const now = new Date('2026-11-18T10:00:00Z');
const mission = { id: 'project-7', kind: 'project', status: 'verified', example: false,
  expiresAt: '2026-12-01', url: 'https://github.com/gsel001/one-meal-forward/issues/7' };
test('only currently advertised project issues are checked', () => {
  const missions = [mission, { ...mission, id: 'expired', expiresAt: '2026-11-17' },
    { ...mission, id: 'pending', status: 'pending' }, { ...mission, id: 'partner', kind: 'organization' },
    { ...mission, id: 'example', example: true }];
  assert.deepEqual(actionableProjectIssues(missions, now), [mission]);
});
test('open GitHub issue passes the audit', async () => {
  let requests = 0;
  const result = await auditProjectIssues([mission], { now, token: '',
    fetchImpl: async (url, options) => {
      requests++;
      assert.equal(url, 'https://api.github.com/repos/gsel001/one-meal-forward/issues/7');
      assert.equal(options.headers.Authorization, undefined);
      return { ok: true, json: async () => ({ number: 7, state: 'open' }) };
    }
  });
  assert.equal(requests, 1); assert.deepEqual(result, []);
});
test('closed, missing, pull request and non-canonical task links fail closed', async () => {
  const cases = [
    [mission, { ok: true, json: async () => ({ number: 7, state: 'closed' }) }],
    [mission, { ok: false, status: 404 }],
    [mission, { ok: true, json: async () => ({ number: 7, state: 'open', pull_request: {} }) }],
    [{ ...mission, url: 'https://example.com/issues/7' }, null]
  ];
  for (const [item, response] of cases) {
    const failures = await auditProjectIssues([item], { now, fetchImpl: async () => response });
    assert.equal(failures.length, 1); assert.equal(failures[0].id, mission.id);
  }
});
test('GitHub outages are visible failures rather than being treated as open issues', async () => {
  const failures = await auditProjectIssues([mission], { now,
    fetchImpl: async () => { throw Object.assign(new Error('offline'), { name: 'TypeError' }); } });
  assert.equal(failures.length, 1); assert.match(failures[0].reason, /could not be checked/);
});
