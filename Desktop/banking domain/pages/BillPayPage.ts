import { Page } from '@playwright/test';

export class BillPayPage {

  constructor(private page: Page) {}

  async navigateToBillPay() {
    await this.page.locator('a[href*="billpay.htm"]').click();
  }

  async enterPayeeDetails() {
    await this.page.locator('input[name="payee.name"]').fill('John Smith');

    await this.page.locator('input[name="payee.address.street"]').fill(
      '123 Main Street'
    );

    await this.page.locator('input[name="payee.address.city"]').fill(
      'New York'
    );

    await this.page.locator('input[name="payee.address.state"]').fill(
      'NY'
    );

    await this.page.locator('input[name="payee.address.zipCode"]').fill(
      '10001'
    );

    await this.page.locator('input[name="payee.phoneNumber"]').fill(
      '1234567890'
    );

    await this.page.locator('input[name="payee.accountNumber"]').fill(
      '12345'
    );

    await this.page.locator(
      'input[name="verifyAccount"]'
    ).fill('12345');
  }

  async enterAmount(amount: string) {
    await this.page.locator('input[name="amount"]').fill(amount);
  }

  async submitPayment() {
    await this.page
      .locator('input[value="Send Payment"]')
      .click();
  }
}