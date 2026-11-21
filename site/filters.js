export function utcDateStart(value) {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return NaN;
  const time = Date.parse(`${value}T00:00:00Z`);
  // Reject dates that the parser rolls into the following month.
  return Number.isFinite(time) && new Date(time).toISOString().slice(0, 10) === value ? time : NaN;
}
export function expiryTime(mission) {
  return utcDateStart(mission.expiresAt) + 86400000;
}
export function effectiveStatus(mission, now = new Date()) {
  if (mission.example) return 'example';
  const expiry = expiryTime(mission);
  const currentTime = now.getTime();
  if (!Number.isFinite(expiry) || !Number.isFinite(currentTime) || currentTime >= expiry) return 'expired';
  return mission.status;
}
export function filterMissions(missions, filters, now = new Date()) {
  const query = (filters.search || '').trim().toLocaleLowerCase();
  return missions.filter(m => {
    if (m.example) return false;
    const haystack = [m.title, m.description, m.organization, m.skill, m.location].join(' ').toLocaleLowerCase();
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
