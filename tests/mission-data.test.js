import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { validUtcDate, validateMissionData } from '../site/mission-data.js';

const now = new Date('2026-11-18T12:00:00.000Z');
const entry = {
  id: 'project-1', title: 'Write a guide', description: 'Document the public process',
  organization: 'OneMealForward', kind: 'project', location: 'Worldwide',
  skill: 'Writing', mode: 'Online', effort: '30–60 min', languages: ['English'],
  status: 'verified', verifiedAt: '2026-11-18', expiresAt: '2027-02-16',
  url: 'https://github.com/gsel001/one-meal-forward/issues/1',
  evidence: 'https://github.com/gsel001/one-meal-forward/issues/1', example: false
};

function failWith(change, pattern) {
  assert.throws(() => validateMissionData([{ ...entry, ...change }], now), pattern);
}

test('validates the actual published mission records', async () => {
  const missions = JSON.parse(await readFile('site/data/missions.json', 'utf8'));
  assert.equal(validateMissionData(missions, now), true);
});

test('strict UTC dates reject normalization of impossible calendar days', () => {
  for (const date of ['2026-02-30', '2026-13-01', '2026-11-31', '2026-1-8', 'yesterday']) {
    assert.equal(validUtcDate(date), false, date);
    failWith({ verifiedAt: date }, /real UTC dates/);
  }
  assert.equal(validUtcDate('2028-02-29'), true);
});

test('verification windows cannot exceed 90 days or run backwards', () => {
  failWith({ expiresAt: '2027-02-17' }, /within 90 days/);
  failWith({ expiresAt: '2026-11-18' }, /within 90 days/);
  failWith({ verifiedAt: '2026-11-19', expiresAt: '2026-12-01' }, /future/);
});

test('reject duplicate IDs, misleading project links, invalid status and examples', () => {
  assert.throws(() => validateMissionData([entry, entry], now), /duplicate mission id/);
  failWith({ id: 'project-2' }, /canonical issue/);
  failWith({ evidence: 'https://github.com/gsel001/one-meal-forward/issues/2' }, /canonical issue/);
  failWith({ url: 'https://evil.example/issues/1' }, /canonical issue/);
  failWith({ status: 'approved' }, /invalid status/);
  failWith({ example: true }, /examples/);
  failWith({ id: 'not a slug' }, /lowercase slug/);
});

test('partner missions require review, consent, and HTTPS links', () => {
  const partner = { ...entry, id: 'org-food-1', organization: 'Local Pantry',
    kind: 'organization', evidence: 'https://example.org/request',
    url: 'https://example.org/volunteer', reviewer: 'maintainer',
    consentEvidence: 'https://example.org/consent' };
  assert.equal(validateMissionData([partner], now), true);
  assert.throws(() => validateMissionData([{ ...partner, reviewer: '' }], now), /public consent/);
  assert.throws(() => validateMissionData([{ ...partner, consentEvidence: 'http://example.org/' }], now), /public consent/);
  assert.throws(() => validateMissionData([{ ...partner, url: 'javascript:alert(1)' }], now), /HTTPS/);
  assert.equal(validateMissionData([{ ...partner, status: 'pending', reviewer: '' }], now), true);
});

test('missing names, languages and malformed records fail validation', () => {
  failWith({ title: '   ' }, /blank title/);
  failWith({ languages: ['English', 'English'] }, /distinct strings/);
  assert.throws(() => validateMissionData({}, now), /must be an array/);
  assert.throws(() => validateMissionData([null], now), /record must be an object/);
});
