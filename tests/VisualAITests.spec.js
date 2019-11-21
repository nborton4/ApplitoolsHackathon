const login = require("../pages/login.page")
const logindata = require("../data/logindata")
const transactions = require("../pages/transactions.page")
const barchart = require("../pages/barchart.page")

const eyesKey = require('../variables/applitools')

//'use strict';
const {Eyes,Target, ClassicRunner} = require('@applitools/eyes-webdriverio');
const runner = new ClassicRunner()
const eyes = new Eyes(runner)
eyes.setApiKey(eyesKey.api)
eyes.setBatch('Visual AI Tests')
     


describe('Hackathon App - Visual Tests', () =>{

    before(()=> {
        //browser.url(`${browser.options.baseUrl}`) 
        
    });

    after(() => {
        //eyes.abortIfNotClosed();
    })

    it('Login Page UI Elements: Assert all elements.', async()=> { 
        await browser.url(`${browser.options.baseUrl}`) 
        await eyes.open(browser, 'Hackathon Application', 'Login Page');
        await eyes.check('Existing UI Elements', Target.window());
        eyes.closeAsync()
    })
    
    it.skip('Data-Driven Test: Assert errors when credentials are missing.', ()=> { 
        eyes.open(browser, 'Hackathon Application', 'Login Page');
        login.typeCredentials('','')
        eyes.check('Missing Credentials', Target.window());  
        browser.pause(3000)
        eyes.close
 
    })

  it.skip('Data-Driven Test: Assert error when username is missing. ', () => {
        eyes.open(browser, 'Hackathon Application', 'Login Page');
        login.typeCredentials('', logindata.passwordValue)
        eyes.check('Missing Username', Target.window());
        eyes.close()
        login.clearInputs()
    })

    it.skip('Data-Driven Test: Assert error when password is missing. ', () => {
        login.typeCredentials(logindata.usernameValue, '')
        eyes.check('Missing Password', Target.window());
        login.clearInputs()
    })

    it.skip('Data-Driven Test: Assert successful login. ', () => {
        login.typeCredentials(logindata.usernameValue, logindata.passwordValue)
        eyes.check('Successful Login', Target.window());
        browser.pause(3000)
    eyes.close()
    eyes.abortIfNotClosed();
    })
            
    it.skip('Table Sort Test: Sort "Amounts" column in ascending order. ',() => {
        eyes.open(browser, 'Hackathon Application', 'Transactions');
        browser.pause(2000)
        transactions.sortAmounts()
        browser.pause(2000)
        eyes.check('Sorted Transaction Table', Target.window());
        eyes.close()
    })

    it.skip('Canavas Chart Test: Validate bar chart for 2017 & 2018. ',() => {
        eyes.open(browser, 'Hackathon Application', 'Canavas');
        browser.pause(2000)
        barchart.clickViewExpensesChart()
        browser.pause(2000)
        eyes.check('Compare 2017 & 2018 Expenses', Target.window());
    })

    it.skip('Canavas Chart Test: Validate bar chart for 2019. ',() => {
        barchart.clickShowNextYearData()
        browser.pause(2000)
        eyes.check('2019 Expenses', Target.window());
        eyes.close()
    })

    it.skip('Dynamic Content Test: Verify the displayed ad. ',() => {
        browser.navigateTo(`${browser.options.baseUrl}?showAd=true`)
        eyes.open(browser, 'Hackathon Application', 'Ad');
        browser.pause(2000)
        login.typeCredentials(logindata.usernameValue, logindata.passwordValue)
        eyes.check('Ad Display', Target.window());
        eyes.close()
    })

})
