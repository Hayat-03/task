const { verify } = require('crypto');

// pages/loginPage.js
const BasePage = require('./basePage').default;
const testData = JSON.parse(JSON.stringify (require('../testData.json')));
const randomNumber = Math.floor(Math.random() * 1000);
//const data = JSON.parse(fs.readFileSync('./testData.json', 'utf8'));

class LoginPage extends BasePage {
  
  constructor(page) {
    super(page);
    this.signIn = "//a[contains(text(),'Sign In')]";
    this.registerNow = "//a[contains(text(),'Register Now!')]";
    this.userName = "[name='username']";
    this.password = "[name='password']";
    this.repeatPassword = "[name='repeatedPassword']";
    this.firstName = "[name='account.firstName']";
    this.lastName = "[name='account.lastName']";
    this.email = "[name='account.email']";
    this.phone = "[name='account.phone']";
    this.address1 = "[name='account.address1']";
    this.address2 = "[name='account.address2']";
    this.city = "[name='account.city']";
    this.state = "[name='account.state']";
    this.zip = "[name='account.zip']";
    this.country = "[name='account.country']";
    this.saveAccountInfo = "[name='newAccount']";
    this.logInButton ="[name='signon']";
    this.fish = "//*[@id='SidebarContent']/a[1]";
    this.dogs = "//*[@id='SidebarContent']/a[2]";
    this.cats = "//*[@id='SidebarContent']/a[3]";
    this.reptiles = "//*[@id='SidebarContent']/a[4]";
    this.birds = "//*[@id='SidebarContent']/a[5]";
    this.angelFish = "//a[contains(text(),'FI-SW-01')]";
    this.tigerFish = "//a[contains(text(),'FI-SW-02')]";
    this.koi = "//a[contains(text(),'FI-FW-01')]";
    this.goldFish = "//a[contains(text(),'FI-FW-02')]";
    this.addToCart = "//a[contains(text(),'Add to Cart')]";
    this.checkOut = "//a[contains(text(),'Proceed to Checkout')]";
    this.cartPage = "//h2[text()='Shopping Cart']";

  }

  async clickSignIn() {
    await this.page.click(this.signIn);
  }

  async clickOnRegisterNow() {
    await this.page.click(this.registerNow);
  }

  async enterUserName(username) {
    if (!this.userID) {  
        this.userID = testData.userID + randomNumber;
    }
    console.log(this.userID);  
    await this.page.fill(this.userName, this.userID);
}

  async enterPassword() {
    await this.page.fill(this.password, testData.password);
  }

  async enterRepeatPassword() {
    await this.page.fill(this.repeatPassword, testData.password);
  }

  async enterFirstName() {
    testData.firstName += randomNumber;
    await this.page.fill(this.firstName, testData.firstName);
  }

  async enterLastName() {
    testData.lastName += randomNumber;
    await this.page.fill(this.lastName, testData.lastName);
  }

  async enterEmail() {
    await this.page.fill(this.email, testData.email);
  }

  async enterPhone() {
    await this.page.fill(this.phone, testData.phone);
  }

  async enterAddress1() {
    await this.page.fill(this.address1, testData.address1);
  } 

  async enterAddress2() {
    await this.page.fill(this.address2, testData.address2);
  }

  async enterCity() {
    await this.page.fill(this.city, testData.city);
  }

  async enterState() {
    await this.page.fill(this.state, testData.state);
  }

  async enterZip() {
    await this.page.fill(this.zip, testData.zip);
  }

  async enterCountry() {
    await this.page.fill(this.country,testData.country);
  }

  async clickSaveAccountInfo() {
    await this.page.click(this.saveAccountInfo);
  }

  async clickOnLoginButton() {
    await this.page.click(this.logInButton);
  }

  async clickFish() {
    await this.page.click(this.fish);
  }

  async clickAngelFish() {
    await this.page.click(this.angelFish);
  }

  async clickOnAddToCartButton() {
    await this.page.click(this.addToCart);
  }

  async verifyCartPage() {
    await this.page.waitForSelector(this.cartPage);
  } 



  async login(username, password) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLogin();
  }
}

module.exports = LoginPage;
