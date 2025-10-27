const assert = require('assert');
const loginPage = require('../pages/LoginPage');

Feature('SauceDemo E2E Tests').tag('@gui');

const USERS = {
  standard: { username: 'standard_user'},
  problem: { username: 'problem_user'},
  locked: { username: 'locked_out_user'}
};

const password = 'secret_sauce';

Before(({ I }) => {
  I.amOnPage('https://www.saucedemo.com/');
});

Scenario('Scenario 1 - Standard user completes purchase', async ({ I }) => {
  await loginPage.login(USERS.standard.username, password);

  I.waitForElement('.inventory_item', 5);

  const addButtons = await I.grabNumberOfVisibleElements('.btn_inventory');
  for (let i = 1; i <= addButtons; i++) {
    I.click(`(//button[contains(@class,'btn_inventory')])[${i}]`);
  }

  I.click('.shopping_cart_link');

  I.click('(//button[contains(text(),"Remove")])[3]');

  I.click('#checkout');
  I.fillField('#first-name', 'John');
  I.fillField('#last-name', 'Doe');
  I.fillField('#postal-code', '12345');
  I.click('#continue');

  const items = await I.grabNumberOfVisibleElements('.cart_item');
  I.say(`Number of items after removal: ${items}`);
  I.seeNumberOfElements('.cart_item', addButtons - 1);

  I.click('#finish');
  I.see('Thank you for your order!');
});

Scenario('Scenario 2 - Problem user adds single item', async ({ I }) => {
  await loginPage.login(USERS.problem.username, password);

  I.see('Sauce Labs Backpack');
  I.click('#add-to-cart-sauce-labs-backpack');

  I.click('.shopping_cart_link');

  I.see('Sauce Labs Backpack', '.cart_item');
});

Scenario('Scenario 3 - Sort products by name', async ({ I }) => {
  await loginPage.login(USERS.standard.username, password);

  I.selectOption('.product_sort_container', 'Name (A to Z)');

  await I.wait(1);
  const productNames = await I.grabTextFromAll('.inventory_item_name');
  const sorted = [...productNames].sort((a, b) => a.localeCompare(b));

  I.say(`Sorted names: ${productNames.join(', ')}`);
  assert.deepStrictEqual(productNames, sorted, 'Products are not sorted correctly');
});

Scenario('Scenario 4 - Locked out user cannot log in', async ({ I }) => {
  await loginPage.login(USERS.locked.username, password);

  I.see('Sorry, this user has been locked out.', '[data-test="error"]');
});
