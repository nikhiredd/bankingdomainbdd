// Generated from: features/transferFunds.feature
import { test } from "playwright-bdd";

test.describe('Funds Transfer', () => {

  test('Customer transfers funds', { tag: ['@regression'] }, async ({ Given, When, Then, And, page }) => { 
    await Given('customer logged into banking application', null, { page }); 
    await When('customer navigates to transfer fund page', null, { page }); 
    await And('customer transfers "100" dollars', null, { page }); 
    await Then('transfer should be completed successfully', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/transferFunds.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@regression"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given customer logged into banking application","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When customer navigates to transfer fund page","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"And customer transfers \"100\" dollars","stepMatchArguments":[{"group":{"start":19,"value":"\"100\"","children":[{"start":20,"value":"100","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then transfer should be completed successfully","stepMatchArguments":[]}]},
]; // bdd-data-end