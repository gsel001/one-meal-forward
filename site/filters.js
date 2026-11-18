export function effectiveStatus(mission, now = new Date()) {
  if (mission.example) return 'example';
  if (mission.expiresAt && new Date(`${mission.expiresAt}T23:59:59Z`) < now) return 'expired';
  return mission.status;
}
function normalizeSearch(value) {
  return String(value || '').normalize('NFKD').replace(/\p{M}/gu, '').trim().toLocaleLowerCase();
}
export function filterMissions(missions, filters, now = new Date()) {
  const query = normalizeSearch(filters.search);
  return missions.filter(m => {
    if (m.example) return false;
    const haystack = normalizeSearch([m.title, m.description, m.organization, m.skill, m.location, m.mode, ...m.languages].join(' '));
    return (!query || haystack.includes(query)) &&
      (!filters.skill || m.skill === filters.skill) &&
      (!filters.location || m.location === filters.location) &&
      (!filters.language || m.languages.includes(filters.language)) &&
      (!filters.mode || m.mode === filters.mode) &&
      (!filters.effort || m.effort === filters.effort) &&
      (!filters.status || effectiveStatus(m, now) === filters.status);
  });
}
export function safeUrl(value) {
  try { const url = new URL(value); return url.protocol === 'https:' && !url.username && !url.password ? url.href : null; }
  catch { return null; }
}
export function reviewedContributions(ledger) {
  return ledger.contributions.filter(c => c.status === 'reviewed' && c.reviewer && safeUrl(c.evidence));
}
