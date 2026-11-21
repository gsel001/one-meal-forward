import { filterMissions, effectiveStatus, expiryTime, safeUrl, reviewedContributions } from './filters.js';
const grid = document.querySelector('#mission-grid');
const count = document.querySelector('#result-count');
const empty = document.querySelector('#empty');
const form = document.querySelector('#filters');
const icons = { Writing: '✎', Translation: '文', Accessibility: '◎', Research: '⌕', Design: '◇', Testing: '✓' };
function element(tag, text, className) {
  const node = document.createElement(tag); if (text) node.textContent = text;
  if (className) node.className = className; return node;
}
function link(text, href) {
  const node = element('a', text); const url = safeUrl(href);
  if (url) node.href = url; return node;
}
function card(m, strings, now, refresh) {
  const status = effectiveStatus(m, now);
  const article = element('article', '', 'mission-card');
  const top = element('div', '', 'card-top');
  const icon = element('span', icons[m.skill] || '↗', 'skill-icon'); icon.setAttribute('aria-hidden', 'true');
  const badge = status === 'verified' && m.kind === 'organization' ? 'Verified organization' : strings[status];
  top.append(icon, element('span', badge, `badge ${status}`));
  const title = element('h3', m.title); title.id = `mission-${m.id}`; article.setAttribute('aria-labelledby', title.id);
  const tags = element('div', '', 'tags');
  [m.skill, m.location, m.mode, ...m.languages].forEach(t => tags.append(element('span', t)));
  const bottom = element('div', '', 'card-bottom');
  bottom.append(element('span', m.effort));
  if (status === 'verified') {
    const action = link(m.kind === 'project' ? 'View task ↗' : 'View opportunity ↗', m.url);
    action.setAttribute('data-mission-action', '');
    // Check at activation too: background timers may not have run at expiry.
    for (const type of ['click', 'auxclick']) action.addEventListener(type, event => {
      if (effectiveStatus(m) !== 'verified') {
        event.preventDefault();
        refresh();
      }
    });
    action.setAttribute('aria-label', `${strings.open}: ${m.title}`); bottom.append(action);
  } else bottom.append(element('span', 'Not accepting volunteers'));
  const evidence = element('p', '', 'card-evidence');
  evidence.append(link(`Evidence · reviewed ${m.verifiedAt}`, m.evidence), document.createTextNode(` · expires ${m.expiresAt}`));
  article.append(top, title, element('p', m.organization, 'org'), element('p', m.description, 'description'), tags, bottom, evidence);
  return article;
}
try {
  const responses = await Promise.all(['./data/missions.json', './locales/en.json', './data/impact.json'].map(path => fetch(path)));
  if (responses.some(r => !r.ok)) throw new Error('Unable to load mission data');
  const [missions, strings, impact] = await Promise.all(responses.map(r => r.json()));
  let limit = 6;
  let expiryTimer;
  const more = element('button', 'Show more missions', 'button show-more'); more.type = 'button';
  grid.after(more);
  function render() {
    const now = new Date();
    const focused = document.activeElement;
    const focusedTitle = focused && grid.contains(focused) ? focused.closest('.mission-card')?.querySelector('h3')?.id : null;
    const focusedAction = focused?.hasAttribute('data-mission-action');
    const focusedHref = focused?.getAttribute('href');
    const filtered = filterMissions(missions, Object.fromEntries(new FormData(form)), now);
    grid.replaceChildren(...filtered.slice(0, limit).map(m => card(m, strings, now, render)));
    count.textContent = `${filtered.length} ${strings.results} · showing ${Math.min(limit, filtered.length)}`;
    empty.hidden = filtered.length > 0; empty.textContent = strings.empty; more.hidden = filtered.length <= limit;
    document.querySelector('#partner-count').textContent = missions.filter(m => !m.example && m.kind === 'organization' && effectiveStatus(m, now) === 'verified').length;
    // Keep focus in the same card; if filtering removes it, announce results.
    if (focusedTitle) {
      const updated = document.getElementById(focusedTitle)?.closest('.mission-card');
      const sameLink = focusedAction ? updated?.querySelector('[data-mission-action]') :
        [...(updated?.querySelectorAll('a') || [])].find(a => a.getAttribute('href') === focusedHref);
      const target = sameLink || updated?.querySelector('h3') || count;
      if (!sameLink) target.tabIndex = -1;
      target.focus({ preventScroll: true });
    }
    clearTimeout(expiryTimer);
    const nextExpiry = Math.min(...missions.filter(m => !m.example).map(expiryTime).filter(time => time > now.getTime()));
    // Long delays must be split to avoid the browser's signed 32-bit overflow.
    if (Number.isFinite(nextExpiry)) expiryTimer = setTimeout(render, Math.min(nextExpiry - now.getTime(), 2147483647));
  }
  form.addEventListener('submit', e => e.preventDefault());
  form.addEventListener('input', () => { limit = 6; render(); });
  form.addEventListener('reset', () => { limit = 6; setTimeout(render, 0); });
  more.addEventListener('click', () => { const previous = limit; limit += 6; render(); const first = grid.children[previous]?.querySelector('a'); first?.focus(); });
  document.addEventListener('visibilitychange', () => { if (!document.hidden) render(); });
  window.addEventListener('pageshow', render);
  render();
  document.querySelector('#contribution-count').textContent = reviewedContributions(impact).length;
  document.querySelector('#impact-note').textContent = `${impact.note} Ledger as of ${impact.asOf}.`;
} catch {
  count.textContent = 'Mission data could not be loaded.';
  empty.hidden = false; empty.replaceChildren(document.createTextNode('Please try again, or '), link('browse real tasks on GitHub', 'https://github.com/gsel001/one-meal-forward/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22'), document.createTextNode('.'));
}
