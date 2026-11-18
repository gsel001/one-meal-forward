import { cp, mkdir, rm, readFile, readdir } from 'node:fs/promises';
import { validateMissionData } from '../site/mission-data.js';
const missions = JSON.parse(await readFile('site/data/missions.json', 'utf8'));
validateMissionData(missions);
const english = JSON.parse(await readFile('site/locales/en.json', 'utf8'));
for (const file of await readdir('site/locales')) {
 if (!file.endsWith('.json') || file === 'registry.json') continue;
 const strings = JSON.parse(await readFile(`site/locales/${file}`, 'utf8'));
 if (JSON.stringify(Object.keys(strings).sort()) !== JSON.stringify(Object.keys(english).sort())) throw new Error(`Locale keys differ: ${file}`);
}
await rm('dist', {recursive:true,force:true}); await mkdir('dist'); await cp('site','dist',{recursive:true});
await cp('PRIVACY.md','dist/privacy.txt');
console.log(`Built static site with ${missions.length} evidence-linked missions; no runtime dependencies.`);
