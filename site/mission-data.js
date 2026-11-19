import { safeUrl } from './filters.js';

const DAY_MS = 24 * 60 * 60 * 1000;
const ID_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const PROJECT_ISSUE_PATTERN = /^https:\/\/github\.com\/gsel001\/one-meal-forward\/issues\/([1-9]\d*)$/;

export function validUtcDate(value) {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const time = Date.parse(value + 'T00:00:00.000Z');
  return Number.isFinite(time) && new Date(time).toISOString().slice(0, 10) === value;
}

/** Validate facts that can be checked mechanically, before the public site builds.
 *  Human verification of consent and evidence is still required.
 */
export function validateMissionData(missions, now = new Date()) {
  if (!Array.isArray(missions)) throw new Error('Mission data must be an array');
  const today = now.toISOString().slice(0, 10);
  const ids = new Set();
  const projectIssues = new Set();
  for (const [index, m] of missions.entries()) {
    const label = 'Mission #' + (index + 1);
    if (!m || typeof m !== 'object' || Array.isArray(m)) throw new Error(label + ': record must be an object');
    for (const key of ['id', 'title', 'description', 'organization', 'location', 'skill', 'mode', 'effort']) {
      if (typeof m[key] !== 'string' || !m[key].trim()) throw new Error(label + ': missing or blank ' + key);
    }
    if (!ID_PATTERN.test(m.id)) throw new Error(label + ': id must be a lowercase slug');
    if (ids.has(m.id)) throw new Error(label + ': duplicate mission id ' + m.id);
    ids.add(m.id);
    if (m.example !== false) throw new Error(label + ': examples may not be published');
    if (!['project', 'organization'].includes(m.kind)) throw new Error(label + ': invalid kind');
    if (!['verified', 'pending', 'expired'].includes(m.status)) throw new Error(label + ': invalid status');
    if (!Array.isArray(m.languages) || m.languages.length === 0 ||
        m.languages.some(language => typeof language !== 'string' || !language.trim()) ||
        new Set(m.languages).size !== m.languages.length) {
      throw new Error(label + ': languages must be nonempty, distinct strings');
    }
    if (!validUtcDate(m.verifiedAt) || !validUtcDate(m.expiresAt)) {
      throw new Error(label + ': verification and expiry need real UTC dates (YYYY-MM-DD)');
    }
    const interval = (Date.parse(m.expiresAt) - Date.parse(m.verifiedAt)) / DAY_MS;
    if (m.verifiedAt > today) throw new Error(label + ': verifiedAt may not be in the future');
    if (interval <= 0 || interval > 90) throw new Error(label + ': expiry must be within 90 days after verification');
    if (!safeUrl(m.url) || !safeUrl(m.evidence)) {
      throw new Error(label + ': public action and evidence URLs must be HTTPS');
    }
    if (m.kind === 'project') {
      if (m.organization !== 'OneMealForward') throw new Error(label + ': project organization must be OneMealForward');
      const match = PROJECT_ISSUE_PATTERN.exec(m.url);
      if (!match || m.id !== 'project-' + match[1] || m.evidence !== m.url) {
        throw new Error(label + ': project entry must link to its own canonical issue');
      }
      if (projectIssues.has(match[1])) throw new Error(label + ': duplicate project issue link');
      projectIssues.add(match[1]);
    } else if (m.status === 'verified') {
      if (typeof m.reviewer !== 'string' || !m.reviewer.trim() || !safeUrl(m.consentEvidence)) {
        throw new Error(label + ': verified partner mission needs a reviewer and public consent evidence');
      }
    }
  }
  return true;
}
