import { safeUrl } from './filters.js';

function validDate(value) {
  return typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value) &&
    !Number.isNaN(Date.parse(value)) && new Date(value).toISOString().slice(0, 10) === value;
}

/**
 * Reject misleading public metrics before build or publication.
 * This validates ledger structure and uniqueness, not whether external evidence is truthful.
 */
export function validateImpactLedger(ledger, now = new Date()) {
  if (!ledger || typeof ledger !== 'object' || Array.isArray(ledger)) {
    throw new Error('Impact ledger must be an object');
  }
  const today = now.toISOString().slice(0, 10);
  if (!validDate(ledger.asOf) || ledger.asOf > today) {
    throw new Error('Impact ledger asOf must be a valid, non-future UTC date');
  }
  if (typeof ledger.note !== 'string' || !ledger.note.trim()) {
    throw new Error('Impact ledger needs an explanatory note');
  }
  if (!Array.isArray(ledger.contributions)) {
    throw new Error('Impact ledger contributions must be an array');
  }
  const ids = new Set();
  const evidenceUrls = new Set();
  for (const [index, contribution] of ledger.contributions.entries()) {
    const prefix = 'Contribution #' + (index + 1) + ': ';
    if (!contribution || typeof contribution !== 'object' || Array.isArray(contribution)) {
      throw new Error(prefix + 'invalid record');
    }
    for (const key of ['id', 'description', 'reviewer']) {
      if (typeof contribution[key] !== 'string' || !contribution[key].trim()) {
        throw new Error(prefix + 'missing ' + key);
      }
    }
    if (!/^[a-z0-9][a-z0-9-]{2,63}$/.test(contribution.id)) {
      throw new Error(prefix + 'id must be a stable lower-case slug');
    }
    if (ids.has(contribution.id)) throw new Error(prefix + 'duplicate contribution ID');
    ids.add(contribution.id);
    if (contribution.status !== 'reviewed') {
      throw new Error(prefix + 'only accepted, reviewed work belongs in public impact totals');
    }
    if (!validDate(contribution.reviewedAt) || contribution.reviewedAt > ledger.asOf) {
      throw new Error(prefix + 'invalid or future review date');
    }
    const url = safeUrl(contribution.evidence);
    if (!url) throw new Error(prefix + 'public HTTPS evidence URL is required');
    if (evidenceUrls.has(url)) throw new Error(prefix + 'duplicate evidence URL');
    evidenceUrls.add(url);
  }
  return true;
}
