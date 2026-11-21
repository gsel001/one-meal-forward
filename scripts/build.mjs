import { cp, mkdir, rm, readFile, readdir } from 'node:fs/promises';
import { safeUrl, utcDateStart } from '../site/filters.js';
const missions = JSON.parse(await readFile('site/data/missions.json', 'utf8'));
const ids = new Set();
for (const m of missions) {
  if (ids.has(m.id)) throw new Error('Duplicate mission ID'); ids.add(m.id);
  if (m.example) throw new Error('Example missions must never enter the public board');
  for (const key of ['id','title','description','organization','location','skill','mode','effort','verifiedAt','expiresAt']) if (typeof m[key] !== 'string' || !m[key]) throw new Error(`Missing ${key}`);
  if (!['project','organization'].includes(m.kind) || !['verified','pending','expired'].includes(m.status)) throw new Error('Invalid mission type/status');
  if (!Array.isArray(m.languages) || !m.languages.length || !safeUrl(m.url) || !safeUrl(m.evidence)) throw new Error('Missing languages or safe evidence URL');
  for (const date of [m.verifiedAt,m.expiresAt]) if (!Number.isFinite(utcDateStart(date))) throw new Error('Invalid verification date');
  if (m.expiresAt <= m.verifiedAt) throw new Error('Expiry must follow review');
  if (m.kind === 'organization' && m.status === 'verified' && (!safeUrl(m.consentEvidence) || !m.reviewer)) throw new Error('Verified organizations need consent and reviewer');
  if (m.kind === 'project' && (m.organization !== 'OneMealForward' || !m.url.startsWith('https://github.com/gsel001/one-meal-forward/issues/'))) throw new Error('Project task must link to this project');
}
const english = JSON.parse(await readFile('site/locales/en.json', 'utf8'));
for (const file of await readdir('site/locales')) {
 if (!file.endsWith('.json') || file === 'registry.json') continue;
 const strings = JSON.parse(await readFile(`site/locales/${file}`, 'utf8'));
 if (JSON.stringify(Object.keys(strings).sort()) !== JSON.stringify(Object.keys(english).sort())) throw new Error(`Locale keys differ: ${file}`);
}
await rm('dist', {recursive:true,force:true}); await mkdir('dist'); await cp('site','dist',{recursive:true});
await cp('PRIVACY.md','dist/privacy.txt');
console.log(`Built static site with ${missions.length} evidence-linked missions; no runtime dependencies.`);
