// Generated from: features/login.feature
import { test } from "playwright-bdd";

test.describe('Login Functionality', () => {

  test('Valid user login', { tag: ['@smoke'] }, async ({ Given, When, Then, page }) => { 
    await Given('customer opens banking application', null, { page }); 
    await When('customer enters valid credentials', null, { page }); 
    await When('clicks login button', null, { page }); 
    await Then('customer should be logged in successfully', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given customer opens banking application","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When customer enters valid credentials","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When clicks login button","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then customer should be logged in successfully","stepMatchArguments":[]}]},
]; // bdd-data-end