import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { LoginPage } from '../pages/LoginPage';
import { BillPayPage } from '../pages/BillPayPage';
import { env } from '../utils/env';
import { test } from './fixtures';

const { Given, When, Then } = createBdd(test);

let loginPage: LoginPage;
let billPayPage: BillPayPage;

Given('customer is logged into banking application', async ({ page }) => {

  loginPage = new LoginPage(page);

  await loginPage.navigate();

  await loginPage.login(
    env.username,
    env.password
  );
});

When('customer navigates to bill pay page', async ({ page }) => {

  billPayPage = new BillPayPage(page);

  await billPayPage.navigateToBillPay();
});

When('customer enters payee information', async () => {

  await billPayPage.enterPayeeDetails();
});

When('customer enters payment amount {string}', async ({}, amount) => {

  await billPayPage.enterAmount(amount);
});

When('customer submits bill payment', async () => {

  await billPayPage.submitPayment();
});

Then('bill payment should be successful', async ({ page }) => {

  await expect(
    page.locator('text=Bill Payment Complete')
  ).toBeVisible();
});