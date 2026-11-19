import { test } from 'node:test';
import assert from 'node:assert/strict';
import { validateImpactLedger } from '../site/impact.js';
const now = new Date('2026-11-18T12:00:00Z');
const entry = { id: 'fix-001', description: 'Improved text contrast', reviewer: 'maintainer',
  status: 'reviewed', reviewedAt: '2026-11-17', evidence: 'https://github.com/gsel001/one-meal-forward/pull/6' };
const ledger = { asOf: '2026-11-18', note: 'Verified contributions only', contributions: [entry] };
test('empty launch ledger and one reviewed entry validate', () => {
  assert.equal(validateImpactLedger({ ...ledger, contributions: [] }, now), true);
  assert.equal(validateImpactLedger(ledger, now), true);
});
test('duplicate work cannot inflate impact through duplicate ids or evidence', () => {
  assert.throws(() => validateImpactLedger({ ...ledger,
    contributions: [entry, { ...entry, evidence: 'https://example.org/change' }] }, now), /duplicate contribution ID/);
  assert.throws(() => validateImpactLedger({ ...ledger,
    contributions: [entry, { ...entry, id: 'fix-002' }] }, now), /duplicate evidence URL/);
});
test('unreviewed, incomplete or unsafe entries are blocked before publication', () => {
  for (const change of [
    { status: 'pending' }, { reviewer: '' }, { reviewedAt: '2026-11-19' },
    { reviewedAt: '2026-02-30' }, { evidence: 'javascript:alert(1)' },
    { evidence: 'http://example.org' }, { id: 'Not A Slug' }
  ]) assert.throws(() => validateImpactLedger({ ...ledger,
    contributions: [{ ...entry, ...change }] }, now));
});
test('bad ledger metadata fails validation rather than reporting made-up counts', () => {
  assert.throws(() => validateImpactLedger({ ...ledger, asOf: '2026-11-19' }, now), /non-future/);
  assert.throws(() => validateImpactLedger({ ...ledger, asOf: '2026-02-30' }, now), /non-future/);
  assert.throws(() => validateImpactLedger({ ...ledger, note: '' }, now), /note/);
  assert.throws(() => validateImpactLedger({ ...ledger, contributions: {} }, now), /array/);
});
