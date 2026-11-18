import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const ORIGIN = 'https://gsel001.github.io/one-meal-forward/';
test('public metadata uses the official project domain and avoids charitable claims', async () => {
  const html = await readFile('site/index.html', 'utf8');
  assert.equal((html.match(/rel="canonical"/g) || []).length, 1);
  assert.ok(html.includes('rel="canonical" href="' + ORIGIN + '"'));
  assert.ok(html.includes('property="og:url" content="' + ORIGIN + '"'));
  assert.match(html, /property="og:title"/);
  assert.match(html, /property="og:description"/);
  assert.match(html, /name="twitter:card" content="summary"/);
  assert.doesNotMatch(html.toLowerCase(), /registered charity|501\(c\)\(3\)|meals served:\s*[1-9]/);
});
test('sitemap and robots.txt refer to the same public canonical home page', async () => {
  const xml = await readFile('site/sitemap.xml', 'utf8');
  const robots = await readFile('site/robots.txt', 'utf8');
  assert.match(xml, /^<\?xml version="1\.0"/);
  assert.ok(xml.includes('<loc>' + ORIGIN + '</loc>'));
  assert.equal((xml.match(/<loc>/g) || []).length, 1);
  assert.ok(robots.includes('Sitemap: ' + ORIGIN + 'sitemap.xml'));
  assert.match(robots, /User-agent: \*/);
  assert.match(robots, /Allow: \//);
});
