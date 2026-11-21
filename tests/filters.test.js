import { test } from 'node:test';
import assert from 'node:assert/strict';
import { filterMissions, effectiveStatus, safeUrl, reviewedContributions } from '../site/filters.js';
const now = new Date('2026-11-18T12:00:00Z');
const base = {id:'one',title:'Write a guide',description:'Accessible help',organization:'OneMealForward',skill:'Writing',location:'Worldwide',languages:['English'],mode:'Online',effort:'30–60 min',status:'verified',expiresAt:'2027-01-01',example:false};
test('all six filters and case-insensitive search combine',()=>{assert.equal(filterMissions([base],{search:' WRITE ',skill:'Writing',location:'Worldwide',language:'English',mode:'Online',effort:'30–60 min',status:'verified'},now).length,1);for(const [key,value] of Object.entries({search:'missing',skill:'Design',location:'Detroit',language:'French',mode:'In person',effort:'1–2 hours',status:'pending'}))assert.equal(filterMissions([base],{[key]:value},now).length,0);});
test('examples excluded from every public query',()=>assert.equal(filterMissions([{...base,example:true}],{},now).length,0));
test('expiration overrides verified badge and filter',()=>{const expired={...base,expiresAt:'2026-11-17'};assert.equal(effectiveStatus(expired,now),'expired');assert.equal(filterMissions([expired],{status:'verified'},now).length,0);assert.equal(effectiveStatus({...base,expiresAt:'2026-11-18'},now),'verified');});
test('pending records stay pending',()=>assert.equal(effectiveStatus({...base,status:'pending'},now),'pending'));
test('expiry includes the final millisecond of the UTC day and changes at midnight',()=>{
 const mission={...base,expiresAt:'2028-02-29'};
 const before=new Date('2028-02-29T23:59:59.999Z');
 const boundary=new Date('2028-03-01T00:00:00.000Z');
 assert.equal(effectiveStatus(mission,before),'verified');
 assert.equal(filterMissions([mission],{status:'verified'},before).length,1);
 assert.equal(effectiveStatus(mission,boundary),'expired');
 assert.equal(filterMissions([mission],{status:'verified'},boundary).length,0);
 assert.equal(filterMissions([mission],{status:'expired'},boundary).length,1);
 assert.equal(effectiveStatus({...mission,status:'pending'},before),'pending');
 assert.equal(effectiveStatus({...mission,status:'pending'},boundary),'expired');
});
test('unsafe protocols and embedded credentials rejected',()=>{for(const value of ['javascript:alert(1)','data:text/html,hi','http://example.org','not a url','https://user:password@example.org'])assert.equal(safeUrl(value),null);assert.equal(safeUrl('https://example.org/'),'https://example.org/');});
test('impact only counts reviewed evidence-linked contributions',()=>assert.equal(reviewedContributions({contributions:[{status:'reviewed',reviewer:'reviewer',evidence:'https://github.com/gsel001/one-meal-forward/pull/1'},{status:'pending',reviewer:'reviewer',evidence:'https://example.org'},{status:'reviewed',evidence:'https://example.org'}]}).length,1));

test('malformed expiry fails closed without changing example status', () => {
  const { expiresAt, ...missing } = base;
  const malformed = [missing, ...[
    null, '', 'not a date', '2027-02-29', '2028-02-30', '2027-04-31',
    '2027-13-01', '2027-00-01', '2027-01-00', '2027-1-01',
    '2027-01-01\n', '2027-01-01T00:00:00Z', 20270101, true, {},
    ['2027-01-01'],
  ].map(value => ({ ...base, expiresAt: value }))];
  for (const mission of malformed) {
    const label = JSON.stringify(mission.expiresAt);
    assert.equal(effectiveStatus(mission, now), 'expired', label);
    assert.equal(effectiveStatus({ ...mission, status: 'pending' }, now), 'expired', label);
    assert.equal(effectiveStatus({ ...mission, example: true }, now), 'example', label);
    assert.equal(filterMissions([mission], { status: 'verified' }, now).length, 0, label);
  }
});

test('expiry rolls over at midnight UTC after a month or year ends', () => {
  for (const [expiresAt, midnight] of [
    ['2027-04-30', '2027-05-01T00:00:00Z'],
    ['2027-12-31', '2028-01-01T00:00:00Z'],
  ]) {
    const mission = { ...base, expiresAt };
    const boundary = new Date(midnight);
    assert.equal(effectiveStatus(mission, new Date(boundary.getTime() - 1)), 'verified');
    assert.equal(effectiveStatus(mission, boundary), 'expired');
    assert.equal(effectiveStatus({ ...mission, status: 'expired' }, now), 'expired');
  }
});
