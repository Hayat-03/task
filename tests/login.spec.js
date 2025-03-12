// tests/loginTest.js
const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const testData = JSON.parse(JSON.stringify (require('../testData.json')));
const { text } = require('stream/consumers');

const fs = require('fs');


test('Task', async ({ page }) => {
  test.setTimeout(60000);
  const loginPage = new LoginPage(page);
  // Navigate to the login page using the baseURL and relative path
  await loginPage.navigate('/actions/Catalog.action'); // The baseURL will be used from the configuration
  
  const title = await loginPage.getTitle();
  expect(title).toBe('JPetStore Demo'); 

  await loginPage.clickSignIn();
  await loginPage.clickOnRegisterNow();
  await loginPage.enterUserName();
  await page.waitForTimeout(500);
  await loginPage.enterPassword();
  await loginPage.enterRepeatPassword();
  await loginPage.enterFirstName();
  await loginPage.enterLastName();
  await loginPage.enterEmail();
  await loginPage.enterPhone();
  await loginPage.enterAddress1();
  await loginPage.enterAddress2();
  await loginPage.enterCity();
  await loginPage.enterState();
  await loginPage.enterZip();
  await loginPage.enterCountry();
  await page.waitForTimeout(1000);
  await loginPage.clickSaveAccountInfo();
  await loginPage.clickSignIn();
  await loginPage.enterUserName();
  await page.waitForTimeout(1000);
  await loginPage.enterPassword();
  await loginPage.clickOnLoginButton();
  await loginPage.clickFish();
  await loginPage.clickAngelFish();
  await loginPage.clickOnAddToCartButton();
  await page.waitForTimeout(2000);
  await loginPage.verifyCartPage();

});
