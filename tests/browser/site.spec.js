import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
test('filters, reset, pagination and empty state',async({page})=>{
 const errors=[];page.on('pageerror',e=>errors.push(e.message));await page.goto('/');
 await expect(page.locator('.mission-card')).toHaveCount(6);await expect(page.locator('#result-count')).toContainText('24 missions');
 await page.getByRole('button',{name:'Show more missions'}).click();await expect(page.locator('.mission-card')).toHaveCount(12);
 await page.getByLabel('Your skill').selectOption('Translation');await expect(page.locator('.mission-card')).toHaveCount(4);
 await page.getByLabel('Search missions',{exact:true}).fill('Spanish');await expect(page.locator('.mission-card')).toHaveCount(1);
 await page.getByRole('button',{name:'Clear filters'}).click();await expect(page.locator('.mission-card')).toHaveCount(6);
 await page.getByLabel('Availability').selectOption('In person');await expect(page.locator('#empty')).toBeVisible();
 await page.getByRole('button',{name:'Clear filters'}).click();await expect(page.locator('#contribution-count')).toHaveText('0');await expect(page.locator('#partner-count')).toHaveText('0');
 expect(errors).toEqual([]);expect(await page.evaluate(()=>document.documentElement.scrollWidth <= innerWidth)).toBeTruthy();
});
test('WCAG automated accessibility scan',async({page})=>{await page.goto('/');await expect(page.locator('.mission-card')).toHaveCount(6);expect((await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21a','wcag21aa','wcag22aa']).analyze()).violations).toEqual([]);});
test('keyboard skip link, safe search and load error fallback',async({page})=>{
 await page.goto('/');await page.keyboard.press('Tab');await expect(page.getByRole('link',{name:'Skip to content'})).toBeFocused();
 await page.getByLabel('Search missions',{exact:true}).fill('<img src=x onerror=alert(1)>');await expect(page.locator('#empty')).toBeVisible();expect(await page.locator('#mission-grid img').count()).toBe(0);
 await page.route('**/data/missions.json',route=>route.abort());await page.reload();await expect(page.locator('#result-count')).toContainText('could not be loaded');await expect(page.locator('#empty a')).toHaveAttribute('href',/github.com/);
});
test('JavaScript-free fallback',async({browser})=>{const context=await browser.newContext({javaScriptEnabled:false});const page=await context.newPage();await page.goto('http://127.0.0.1:4173');await expect(page.getByRole('link',{name:'browse all beginner tasks on GitHub'})).toBeVisible();await context.close();});

test('a first-time non-coder can find a task and understand comment submission',async({page},testInfo)=>{
 await page.goto('/');
 await expect(page.getByText('No coding experience required to contribute.',{exact:true})).toBeVisible();
 await expect(page.getByRole('link',{name:'I don’t code',exact:true})).toBeInViewport();
 await page.getByRole('link',{name:'I don’t code',exact:true}).click();
 const path=page.locator('#non-coders');
 await expect(path).toContainText('A free GitHub account is required to submit work.');
 await expect(path).toContainText('No terminal, installation, fork or pull request is required');
 await path.getByText('What to put in your comment').click();
 await expect(path.locator('pre')).toContainText('Public source URL and date checked:');
 await expect(path).toContainText('Do not include private contacts');
 await expect(path.getByRole('link',{name:'public information research'})).toHaveAttribute('href','https://github.com/gsel001/one-meal-forward/issues/6');
 await page.getByLabel('Your skill').selectOption('Research');
 await expect(page.locator('.mission-card')).toHaveCount(4);
 await expect(page.locator('.mission-card').first().getByRole('link',{name:/View task on GitHub/})).toHaveAttribute('href','https://github.com/gsel001/one-meal-forward/issues/6');
 await page.getByRole('button',{name:'Clear filters'}).click();
 await page.goto('/');await page.screenshot({path:testInfo.outputPath('participation.png')});
});

test('developer can locate source, checks and the independent-review gate',async({page})=>{
 await page.goto('/');const path=page.locator('#developers');
 await expect(path.getByRole('link',{name:'Website code: site/'})).toHaveAttribute('href','https://github.com/gsel001/one-meal-forward/tree/main/site');
 await expect(path.getByRole('link',{name:'Tests: tests/'})).toHaveAttribute('href','https://github.com/gsel001/one-meal-forward/tree/main/tests');
 await expect(path.getByRole('link',{name:'CI results'})).toHaveAttribute('href','https://github.com/gsel001/one-meal-forward/actions');
 await expect(path.getByRole('link',{name:'Review the independent reviewer task'})).toHaveAttribute('href','https://github.com/gsel001/one-meal-forward/issues/35');
 await expect(path).toContainText('Founder-authored PRs need another authorized reviewer.');
 await expect(path).toContainText(/staff acceptance and actual use are separate/i);
});

test('320px reflow keeps contribution instructions and filters usable',async({page})=>{
 await page.setViewportSize({width:320,height:800});await page.goto('/');
 await expect(page.locator('.mission-card')).toHaveCount(6);
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBeTruthy();
 await page.getByLabel('Your skill').selectOption('Writing');
 await expect(page.locator('.mission-card')).toHaveCount(5);
 await page.getByRole('button',{name:'Clear filters'}).click();await expect(page.locator('.mission-card')).toHaveCount(6);
});
