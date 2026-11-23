import { createBdd } from 'playwright-bdd';
import { test,expect } from './fixtures';
import { LoginPage } from '../pages/LoginPage';
import { TransferPage } from '../pages/TransferFundsPage';


const { Given, When, Then}  = createBdd(test);

let loginPage: LoginPage;
let transferPage: TransferPage;


Given('customer logged into banking application', async ({ page }) => {
  loginPage = new LoginPage(page);

  await loginPage.navigate();

  await loginPage.login(
    process.env.USERNAME!,
    process.env.PASSWORD!
  );
});

When('customer navigates to transfer fund page', async ({ page }) => {
  transferPage = new TransferPage(page);

  await transferPage.navigateToTransferFunds();
});

When('customer transfers {string} dollars', async ({ page }, amount: string) => {
  await transferPage.transferFunds(amount);
});

Then('transfer should be completed successfully', async ({ page }) => {
  await expect(
    page.locator('text=Transfer Complete!')
  ).toBeVisible();

  await expect(
    page.locator('text=has been transferred')
  ).toBeVisible();
});