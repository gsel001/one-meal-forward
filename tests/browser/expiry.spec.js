import { test, expect } from '@playwright/test';

const before = new Date('2026-11-18T23:59:59.999Z');
const boundary = new Date('2026-11-19T00:00:00.000Z');
const missions = Array.from({ length: 10 }, (_, index) => ({
  id: `expiry-test-${index}`, title: `Expiry test mission ${index}`,
  description: 'Synthetic browser-test fixture, never published.',
  organization: index < 2 ? 'Test organization' : 'OneMealForward',
  kind: index < 2 ? 'organization' : 'project',
  skill: 'Writing', location: 'Worldwide', languages: ['English'],
  mode: 'Online', effort: '30–60 min', example: false,
  status: index === 8 ? 'pending' : 'verified',
  verifiedAt: '2026-11-01',
  expiresAt: index === 0 ? '2026-11-18' : index === 9 ? '2026-11-17' : '2026-11-20',
  url: `https://example.test/mission/${index}`,
  evidence: `https://example.test/evidence/${index}`
}));

async function loadMissions(page, data = missions) {
  await page.clock.install({ time: before });
  await page.clock.pauseAt(before);
  await page.route('**/data/missions.json', route => route.fulfill({ json: data }));
  await page.route('https://example.test/**', route => route.fulfill({
    contentType: 'text/html', body: '<h1>Test destination</h1>'
  }));
  await page.goto('/');
  await expect(page.locator('.mission-card')).toHaveCount(6);
}

function firstCard(page) {
  return page.getByRole('article', { name: missions[0].title, exact: true });
}

test('verified missions remain navigable through the final UTC millisecond', async ({ page }) => {
  await loadMissions(page);
  await expect(firstCard(page).locator('.badge')).toHaveText('Verified organization');
  await expect(page.locator('#partner-count')).toHaveText('2');
  await firstCard(page).locator('[data-mission-action]').click();
  await expect(page).toHaveURL(missions[0].url);
});

test('UTC boundary refreshes labels, actions, filters and counts without resetting pagination', async ({ page }) => {
  await loadMissions(page);
  await page.getByRole('button', { name: 'Show more missions' }).click();
  await expect(page.locator('.mission-card')).toHaveCount(10);
  await firstCard(page).locator('[data-mission-action]').focus();
  await page.clock.runFor(1);
  await expect(firstCard(page).locator('.badge')).toHaveText('Expired');
  await expect(firstCard(page).locator('[data-mission-action]')).toHaveCount(0);
  await expect(firstCard(page).getByRole('heading')).toBeFocused();
  await page.keyboard.press('Tab');
  await expect(firstCard(page).getByRole('link', { name: /Evidence/ })).toBeFocused();
  await expect(page.locator('.mission-card')).toHaveCount(10);
  await expect(page.locator('#partner-count')).toHaveText('1');
  await expect(page.locator('#result-count')).toHaveText('10 missions match · showing 10');
  await expect(page.locator('.badge.expired')).toHaveCount(2);
  await expect(page.locator('.badge.pending')).toHaveCount(1);
  await expect(page.locator('[data-mission-action]')).toHaveCount(7);
  await page.getByLabel('Verification', { exact: true }).selectOption('expired');
  await expect(page.locator('.mission-card')).toHaveCount(2);
  await page.getByLabel('Verification', { exact: true }).selectOption('verified');
  await expect(page.locator('#result-count')).toHaveText('7 missions match · showing 6');
  await page.getByLabel('Search missions', { exact: true }).fill('mission 1');
  await expect(page.locator('.mission-card')).toHaveCount(1);
  await expect(page.locator('#partner-count')).toHaveText('1');
});

for (const activation of ['click', 'keyboard', 'middle-click']) {
  test(`stale ${activation} activation cannot navigate when the expiry timer was delayed`, async ({ page, context }) => {
    await loadMissions(page);
    const action = firstCard(page).locator('[data-mission-action]');
    await action.focus();
    // Jump the wall clock without executing timers, as in a throttled tab.
    await page.clock.setSystemTime(boundary);
    await expect(action).toHaveCount(1);
    const destinations = [];
    context.on('request', request => {
      if (request.url() === missions[0].url) destinations.push(request.url());
    });
    if (activation === 'keyboard') await page.keyboard.press('Enter');
    else await action.click({ button: activation === 'middle-click' ? 'middle' : 'left' });
    await expect(firstCard(page).locator('.badge')).toHaveText('Expired');
    await expect(firstCard(page).locator('[data-mission-action]')).toHaveCount(0);
    await expect(page).toHaveURL('http://127.0.0.1:4173/');
    expect(destinations).toEqual([]);
    expect(context.pages()).toHaveLength(1);
  });
}

test('returning to a visible tab refreshes a stale verified filter and restores focus', async ({ page }) => {
  await loadMissions(page);
  await page.getByLabel('Verification', { exact: true }).selectOption('verified');
  await firstCard(page).locator('[data-mission-action]').focus();
  await page.evaluate(() => {
    Object.defineProperty(document, 'hidden', { configurable: true, value: true });
    document.dispatchEvent(new Event('visibilitychange'));
  });
  await page.clock.setSystemTime(boundary);
  await expect(firstCard(page).locator('[data-mission-action]')).toHaveCount(1);
  await page.evaluate(() => {
    Object.defineProperty(document, 'hidden', { configurable: true, value: false });
    document.dispatchEvent(new Event('visibilitychange'));
  });
  await expect(firstCard(page)).toHaveCount(0);
  await expect(page.getByLabel('Verification', { exact: true })).toHaveValue('verified');
  await expect(page.locator('#result-count')).toHaveText('7 missions match · showing 6');
  await expect(page.locator('#result-count')).toBeFocused();
  await expect(page.locator('#partner-count')).toHaveText('1');
  // A second boundary is scheduled from the new wall clock after resuming.
  await page.clock.runFor(2 * 86400000);
  await expect(page.locator('.mission-card')).toHaveCount(0);
  await expect(page.locator('#partner-count')).toHaveText('0');
  await expect(page.locator('#empty')).toBeVisible();
});

test('page restoration refreshes stale actions even if timers did not run', async ({ page }) => {
  await loadMissions(page);
  await page.clock.setSystemTime(boundary);
  await page.evaluate(() => window.dispatchEvent(new PageTransitionEvent('pageshow', { persisted: true })));
  await expect(firstCard(page).locator('.badge')).toHaveText('Expired');
  await expect(firstCard(page).locator('[data-mission-action]')).toHaveCount(0);
  await expect(page.locator('#partner-count')).toHaveText('1');
});

test('long expiry delays do not overflow into immediate repeated refreshes', async ({ page }) => {
  const future = missions.map(m => ({ ...m, status: 'verified', expiresAt: '2027-01-01' }));
  await loadMissions(page, future);
  const action = firstCard(page).locator('[data-mission-action]');
  await action.focus();
  await page.clock.runFor(2147483647);
  await expect(action).toBeFocused();
  await expect(firstCard(page).locator('.badge')).toHaveText('Verified organization');
  await page.clock.runFor(Date.parse('2027-01-02T00:00:00Z') - before.getTime() - 2147483647);
  await expect(firstCard(page).locator('[data-mission-action]')).toHaveCount(0);
  await expect(page.locator('#partner-count')).toHaveText('0');
});
