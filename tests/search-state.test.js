import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createShareableQuery, readSharedFilters } from '../site/search-state.js';
const options = { skill: ['', 'Translation', 'Writing'], location: ['', 'Worldwide'],
  language: ['', 'English'], mode: ['', 'Online'], effort: ['', '1–2 hours'],
  status: ['', 'verified', 'pending'] };

test('shared search URLs round-trip human-readable filters', () => {
  const query = createShareableQuery({ search: 'café rescue', skill: 'Translation', language: 'English' });
  assert.deepEqual(readSharedFilters('?' + query, options),
    { search: 'café rescue', skill: 'Translation', language: 'English' });
});
test('unexpected URL fields and unrecognized selections are ignored', () => {
  const filters = readSharedFilters('?skill=%3Cscript%3E&mode=In%20person&tracking=1&status=verified', options);
  assert.deepEqual(filters, { status: 'verified' });
});
test('search URLs are bounded and do not add empty fields', () => {
  const query = createShareableQuery({ search: 'x'.repeat(300), status: '', skill: '' });
  assert.equal(readSharedFilters('?' + query, options).search.length, 160);
  assert.equal(new URLSearchParams(query).has('status'), false);
});
