import { test, expect } from '@playwright/test';

test('has red component', async ({ page }) => {
  await page.goto('');
  await expect(page.locator('div.red-component')).toBeVisible({ timeout: 60000 });
});