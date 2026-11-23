
import { test, expect } from './fixtures';
import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd(test);

Given('customer opens banking application', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
});

When('customer enters valid credentials', async ({ page }) => {
  await page.locator('input[name="username"]').fill('john');
  await page.locator('input[name="password"]').fill('demo');
});

When('clicks login button', async ({ page }) => {
  await page.locator('input[value="Log In"]').click();
});

Then('customer should be logged in successfully', async ({ page }) => {
  await page.waitForLoadState('domcontentloaded');

  console.log('Current URL:', page.url());

  console.log('Page title:', await page.title());

  await page.screenshot({
    path: 'login-result.png',
    fullPage: true
  });

  await expect(page).toHaveURL(/overview\.htm/);
});
