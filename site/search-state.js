export const FILTER_KEYS = ['search', 'skill', 'location', 'language', 'mode', 'effort', 'status'];
const MAX_SEARCH_LENGTH = 160;

/** Read only recognized filter values; unknown URLs cannot inject select options. */
export function readSharedFilters(search, allowedSelections = {}) {
  const params = new URLSearchParams(search);
  const values = {};
  for (const key of FILTER_KEYS) {
    const value = params.get(key);
    if (value === null) continue;
    if (key === 'search') values[key] = value.slice(0, MAX_SEARCH_LENGTH);
    else if (allowedSelections[key]?.includes(value)) values[key] = value;
  }
  return values;
}

/** Stable share URLs without tracking parameters or unrelated query fields. */
export function createShareableQuery(filters) {
  const params = new URLSearchParams();
  for (const key of FILTER_KEYS) {
    const value = filters[key];
    if (typeof value === 'string' && value.trim()) {
      params.set(key, key === 'search' ? value.slice(0, MAX_SEARCH_LENGTH) : value);
    }
  }
  return params.toString();
}
