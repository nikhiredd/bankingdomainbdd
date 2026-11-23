import { Page, Locator } from '@playwright/test';

export class TransferPage {

  readonly page: Page;

  readonly transferFundsLink: Locator;
  readonly amountInput: Locator;
  readonly fromAccountDropdown: Locator;
  readonly toAccountDropdown: Locator;
  readonly transferButton: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    this.page = page;

    this.transferFundsLink = page.locator(
      'a[href*="transfer.htm"]'
    );

    this.amountInput = page.locator('#amount');

    this.fromAccountDropdown = page.locator('#fromAccountId');

    this.toAccountDropdown = page.locator('#toAccountId');

    this.transferButton = page.locator(
      'input[value="Transfer"]'
    );

    this.successMessage = page.locator(
      '#showResult h1'
    );
  }

  async navigateToTransferFunds() {
    await this.transferFundsLink.click();
  }

  async transferFunds(amount: string) {

    await this.amountInput.fill(amount);

    const fromAccount =
      await this.fromAccountDropdown
        .locator('option')
        .nth(0)
        .getAttribute('value');

    const toAccount =
      await this.toAccountDropdown
        .locator('option')
        .nth(1)
        .getAttribute('value');

    if (fromAccount && toAccount) {

      await this.fromAccountDropdown.selectOption(
        fromAccount
      );

      await this.toAccountDropdown.selectOption(
        toAccount
      );
    }

    await this.transferButton.click();
  }

  async getSuccessMessage() {
    return await this.successMessage.textContent();
  }
}