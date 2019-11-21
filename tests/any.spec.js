
const login = require("../pages/login.page")
const logindata = require("../data/logindata")

const eyesKey = require('../variables/applitools')
const {ClassicRunner,Eyes,Target} = require('@applitools/eyes-webdriverio');
const {Configuration} = require('@applitools/eyes-selenium');

const runner = new ClassicRunner();

eyes = new Eyes(runner);
const configuration = new Configuration();
configuration.setAppName('Hackathon App');
configuration.setTestName('Visual AI Tests');
eyes.setConfiguration(configuration);
eyes.setApiKey(eyesKey.api)
describe("Visual Tests", () => {
  beforeEach(() => {
    browser.url(`${browser.options.baseUrl}`) 
  });
  describe("1 - Login Page UI Elements Test", () => {
    it("should check ui elements", async () => {
        await eyes.check('Existing UI Elements', Target.window());
    });
  });

  describe("2 - Data-Driven Test", () => {
    it("should throw an error if try login without fill any authentication field", async () => {
      login.typeCredentials("","");
      // check error message
      await eyes.check('Missing Credentials', Target.window());  
    });
   /* it("should throw an error if try login with only enter the username", async () => {
      login.setUsername("only_username");
      login.clickOnLoginButton();
      // check error message
      await eyes.checkElementBySelector(login.rootSelector);
    });
    it("should throw an error if try login with only enter the password", async () => {
      login.setPassword("only_password");
      login.clickOnLoginButton();
      // check error message
      await eyes.checkElementBySelector(login.rootSelector);
    });

    it("should log you in if you fill authentication fields", async () => {
      login.login();
      // wait for
      toolbar.waitForToolbar();
      transactions.waitForTransactionsTable();
      await eyes.checkElementBySelector("body");
    });
  });

  describe("3 - Table Sort Test", () => {
    it("should be able to sort data in the table", async () => {
      login.login();
      // click to sort asc
      transactions.clickOnAmountTableHeader();
      await eyes.checkElementBySelector(transactions.transactionsTable);
    });
  });

  describe("4 - Canvas Chart Test", () => {
    it("should be able to displayed a bar chart", async () => {
      login.login();
      toolbar.clickOnCompareExpensesLink();
      chart.waitForChart();
      await eyes.checkElementBySelector(chart.chart);
    });
    it("should be able to show data  for next year on bar chart", async () => {
      login.login();
      toolbar.clickOnCompareExpensesLink();
      chart.waitForChart();
      chart.clickOnShowDataForNextYear();

      await eyes.checkElementBySelector(chart.chart);
    });
  });

  describe("5 - Dynamic Content Test", () => {
    it("should be able to displayed two promotional images", async () => {
      eyes.setMatchLevel("Layout");
      // set show ad to true
      login.navigateToLogin(true);
      login.login();
      await eyes.checkElementBySelector(".element-balances");
    });*/
  });
});