import { filterMissions, effectiveStatus, safeUrl, reviewedContributions } from './filters.js';
import { FILTER_KEYS, readSharedFilters, createShareableQuery } from './search-state.js';
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
function card(m, strings) {
  const status = effectiveStatus(m);
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
  const allowed = Object.fromEntries(FILTER_KEYS.filter(key => key !== 'search')
    .map(key => [key, Array.from(form.elements.namedItem(key).options, option => option.value)]));
  function restoreFilters() {
    const shared = readSharedFilters(window.location.search, allowed);
    for (const key of FILTER_KEYS) form.elements.namedItem(key).value = shared[key] ?? '';
  }
  function saveFilters() {
    const query = createShareableQuery(Object.fromEntries(new FormData(form)));
    const address = window.location.pathname + (query ? '?' + query : '') + window.location.hash;
    window.history.replaceState(null, '', address);
  }
  restoreFilters();
  let limit = 6;
  const more = element('button', 'Show more missions', 'button show-more'); more.type = 'button';
  grid.after(more);
  function render() {
    const filtered = filterMissions(missions, Object.fromEntries(new FormData(form)));
    grid.replaceChildren(...filtered.slice(0, limit).map(m => card(m, strings)));
    count.textContent = `${filtered.length} ${strings.results} · showing ${Math.min(limit, filtered.length)}`;
    empty.hidden = filtered.length > 0; empty.textContent = strings.empty; more.hidden = filtered.length <= limit;
  }
  form.addEventListener('submit', e => e.preventDefault());
  form.addEventListener('input', () => { limit = 6; render(); saveFilters(); });
  form.addEventListener('reset', () => {
    limit = 6;
    setTimeout(() => { render(); saveFilters(); }, 0);
  });
  window.addEventListener('popstate', () => { restoreFilters(); limit = 6; render(); });
  more.addEventListener('click', () => { const previous = limit; limit += 6; render(); const first = grid.children[previous]?.querySelector('a'); first?.focus(); });
  render();
  document.querySelector('#contribution-count').textContent = reviewedContributions(impact).length;
  document.querySelector('#partner-count').textContent = missions.filter(m => !m.example && m.kind === 'organization' && effectiveStatus(m) === 'verified').length;
  document.querySelector('#impact-note').textContent = `${impact.note} Ledger as of ${impact.asOf}.`;
} catch {
  count.textContent = 'Mission data could not be loaded.';
  empty.hidden = false; empty.replaceChildren(document.createTextNode('Please try again, or '), link('browse real tasks on GitHub', 'https://github.com/gsel001/one-meal-forward/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22'), document.createTextNode('.'));
}
