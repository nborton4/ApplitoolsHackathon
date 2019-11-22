
/**
 * FOUND FEW ISSUES IN RUNNING THE TEST, AS I AM NEW TO THE ASYNC/WAIT CONCEPT. 
 * ALL METHODS CREATED IN login.page.js ARE SYNC METHOD AND I HAVE TO CALL THEM
 * IN THE ASYNC TEST CASES.
 * 
 * WAS ADVISED TO INCLUDE "@wdio/sync" TO MY PACKAGES AND IT SHOULD HANDLE THE CALLS.
 */


 /**
  * THIS VISUAL TEST USES APPLITOOLS. IT PERFORM THE SAME STEPS AS IN THE "TraditionalTests"
  * AND CAPTURES SCREENSHOTS
  */

  //Page model(s)
const login = require("../pages/login.page")
//Data file(s)
const logindata = require("../data/logindata")

//Importing & initializing the SDK
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

//Start the test
describe('Hackathon App - Visual Tests', ()=> {
    before(()=> {
        eyes.open(browser);
        browser.url(`${browser.options.baseUrl}`) 
    })
})

after(() => {
    eyes.abortIfNotClosed();
})

describe('Login Page - Existing UI Elements', async ()=> { //LOGIN PAGE UI ELEMENTS TEST
    it('Assert all elements.', async()=>{ 
        await eyes.setBatch("Login")
        await eyes.check('Existing UI Elements', Target.window());
    })
 
    it('Assert errors when credentials are missing.', async ()=> { //DATA-DRIVEN TEST: WHEN MISSING BOTH USERNAMD AND PASSWORD
        login.typeCredentials('', '')
        await eyes.check('Missing Credentials', Target.window());  
    })

    it('Assert error when username is missing. ', async () => { //DATA-DRIVEN TEST: WHEN MISSING THE USERNAME
        login.typeCredentials('', logindata.passwordValue)
        await eyes.check('Missing Username', Target.window());
        login.clearInputs()
    })

    it('Data-Driven Test: Assert error when password is missing. ', async() => { //DATA-DRIVEN TEST: WHEN MISSING THE PASSWORD
        login.typeCredentials(logindata.usernameValue, '')
        await eyes.check('Missing Password', Target.window());
        login.clearInputs()
    })

    it('Data-Driven Test: Assert successful login. ', async () => { //SUCCESSFUL LOGIN
        login.typeCredentials(logindata.usernameValue, logindata.passwordValue)
        await eyes.check('Successful Login', Target.window());
        await eyes.close()
    })
    it('Table Sort Test: Sort "Amounts" column in ascending order. ',async () => { //TABLE SORT TEST
        await eyes.open(browser, 'Hackathon Application', 'Transactions');
        browser.pause(2000)
        transactions.sortAmounts()
        browser.pause(2000)
        await eyes.check('Sorted Transaction Table', Target.window());
        await eyes.close()
    })

    it('Canvas Chart Test: Validate bar chart for 2017 & 2018. ',async() => { //CANVAS CHART TEST FOR 2017 & 2018
        await eyes.open(browser, 'Hackathon Application', 'Canvas');
        browser.pause(2000)
        barchart.clickViewExpensesChart()
        browser.pause(2000)
        await eyes.check('Compare 2017 & 2018 Expenses', Target.window());
    })

    it('Canvas Chart Test: Validate bar chart for 2019. ',async() => { //CANVAS CHART FOR 2019
        barchart.clickShowNextYearData()
        browser.pause(2000)
        await eyes.check('2019 Expenses', Target.window());
        await eyes.close()
    })

    it('Dynamic Content Test: Verify the displayed ad. ',async () => { //DYNAMIC CONTENT TEST
        browser.navigateTo(`${browser.options.baseUrl}?showAd=true`)
        await eyes.open(browser, 'Hackathon Application', 'Ad');
        browser.pause(2000)
        login.typeCredentials(logindata.usernameValue, logindata.passwordValue)
        await eyes.check('Ad Display', Target.window());
        await eyes.close()
    })

})

