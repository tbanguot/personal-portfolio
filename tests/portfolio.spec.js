import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

for (const theme of ['light', 'dark']) {
  test(`${theme}: responsive layout and accessibility`, async ({ page }) => {
    await page.addInitScript((value) => localStorage.setItem('portfolio-theme', value), theme);
    await page.goto('/');
    await expect(page.locator('html')).toHaveAttribute('data-theme', theme);
    for (const width of [320, 375, 640, 768, 820, 1024, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `overflow at ${width}px`).toBe(true);
    }
    for (const width of [320, 768, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
      expect(results.violations).toEqual([]);
    }
  });
}

test('mobile disclosure supports keyboard and destination focus', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/');
  const toggle = page.getByRole('button', { name: 'Open menu' });
  await toggle.focus();
  await page.keyboard.press('Enter');
  await expect(page.getByRole('button', { name: 'Close menu' })).toHaveAttribute('aria-expanded', 'true');
  await page.keyboard.press('Escape');
  await expect(toggle).toBeFocused();
  await expect(toggle).toHaveAttribute('aria-expanded', 'false');
  await toggle.click();
  await page.getByRole('navigation', { name: 'Mobile Navigation' }).getByRole('link', { name: 'Projects', exact: true }).click();
  await expect(page.locator('#projects')).toBeFocused();
  await expect(toggle).toHaveAttribute('aria-expanded', 'false');
  await toggle.click();
  await page.setViewportSize({ width: 1200, height: 900 });
  await page.setViewportSize({ width: 375, height: 812 });
  await expect(toggle).toHaveAttribute('aria-expanded', 'false');
});

for (const succeeds of [true, false]) {
  test(`clipboard ${succeeds ? 'success' : 'failure'} is announced`, async ({ page }) => {
    await page.addInitScript((success) => {
      Object.defineProperty(navigator, 'clipboard', { configurable: true, value: {
        writeText: async (text) => {
          if (!success) throw new Error('Clipboard denied');
          window.copiedEmail = text;
        },
      } });
    }, succeeds);
    await page.setViewportSize({ width: 320, height: 812 });
    await page.goto('/');
    await page.getByRole('button', { name: 'Copy email address' }).click();
    await expect(page.getByRole('status')).toContainText(succeeds ? 'Email address copied' : 'Select the email address below');
    await expect(page.getByRole('button', { name: 'Copy email address' })).toBeVisible();
    if (succeeds) expect(await page.evaluate(() => window.copiedEmail)).toBe('tongolmalual@gmail.com');
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  });
}

test('storage denial leaves rendering and theme toggling functional', async ({ page }) => {
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.addInitScript(() => {
    Object.defineProperty(window, 'localStorage', { get() { throw new Error('Storage denied'); } });
  });
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  await page.getByRole('button', { name: 'Switch to light mode' }).filter({ visible: true }).click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  expect(errors).toEqual([]);
});

test('saved system theme follows OS preference', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'dark' });
  await page.addInitScript(() => localStorage.setItem('portfolio-theme', 'system'));
  await page.goto('/');
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await page.emulateMedia({ colorScheme: 'light' });
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
});

test('production metadata uses an absolute consistent origin', async ({ request }) => {
  const response = await request.get('/');
  const html = await response.text();
  expect(html).toContain('rel="canonical" href="https://portfolio.example/"');
  expect(html).toContain('property="og:url" content="https://portfolio.example/"');
  expect(html.match(/content="https:\/\/portfolio.example\/social-preview.png"/g)).toHaveLength(2);
  const schema = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
  expect(schema.url).toBe('https://portfolio.example/');
});

test('reduced motion applies to the Top anchor', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  await page.getByRole('contentinfo').getByRole('link', { name: 'Top', exact: true }).click();
  await expect(page).toHaveURL(/#home$/);
  expect(await page.locator('html').evaluate((element) => getComputedStyle(element).scrollBehavior)).toBe('auto');
});
