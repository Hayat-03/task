// pages/basePage.js
class BasePage {
    constructor(page) {
      this.page = page;
      this.dashBoard = "//a[text()='Smile Fund']"
    }
  
    async navigate(path) {
      await this.page.goto(path);
    }
  
    async getTitle() {
      return await this.page.title();
    }

    async clickOnSmileFund() {
      await test.step("Click on SmileFunde", async () => {
      await this.page.click(this.dashBoard);
        
    });
    }
  }
  
  export default BasePage;
  