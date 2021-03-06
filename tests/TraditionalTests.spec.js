/**
  * THIS TRADITIONAL TEST DOESNT USE APPLITOOLS. CATCHES FAILURES AND DISPLAYS CUSTOM ERROR MESSAGES
  */

  //Page model(s)
const login = require("../pages/login.page")
const transactions = require("../pages/transactions.page")
const barchart = require("../pages/barchart.page")
const ad = require('../pages/ad.page')

//Data file(s)
const logindata = require("../data/logindata")
const barchartdata = require("../data/barchartdata")

//Start the test
describe("Hackathon App: ", function(){

    before( () => {
        browser.url(`${browser.options.baseUrl}`)
        browser.pause(5000)
    })

    after( () => {
        browser.closeWindow()
    })

    it('Login Page UI Elements Test: Assert all elements. ',() =>{ //LOGIN PAGE UI ELEMENTS TEST
        login.assertPageElements()
    })

    it('Data-Driven Test: Assert errors when credentials are missing. ', () => { //DATA-DRIVEN TEST: WHEN MISSING BOTH USERNAMD AND PASSWORD
        login.typeCredentials('','')
             .assertMissingCredentialsErrors()   
    })

    it('Data-Driven Test: Assert error when username is missing. ', () => { //DATA-DRIVEN TEST: WHEN MISSING THE USERNAME
        login.typeCredentials('', logindata.passwordValue)
             .assertMissingUsernameError()
             .clearInputs()
    })

    it('Data-Driven Test: Assert error when password is missing. ', () => { //DATA-DRIVEN TEST: WHEN MISSING THE PASSWORD
        login.typeCredentials(logindata.usernameValue, '')
             .assertMissingPasswordError()
             .clearInputs()
  
    })

    it('Data-Driven Test: Assert successful login. ', () => { //DATA-DRIVEN TEST: SUCCESSFUL LOGIN
        login.typeCredentials(logindata.usernameValue, logindata.passwordValue)
             .assertSuccessfulLogin()
    })

    it('Table Sort Test: Sort "Amounts" column in ascending order. ',() => { //TABLE SORT TEST
        transactions.sortAmounts()
        browser.pause(2000)
        transactions.assertOrder()
    })

    it('Canvas Chart Test: Validate bar chart for 2017 & 2018. ',() => { //CANVAS CHART TEST FOR 2017 & 2018
        barchart.clickViewExpensesChart()
        browser.pause(3000)
        barchart.validateAvailableMonthsYears()
        barchart.validateBarchartData2017(barchartdata.jan2017, barchartdata.feb2017,barchartdata.mar2017,barchartdata.apr2017,barchartdata.may2017,barchartdata.jun2017,barchartdata.jul2017)
        barchart.validateBarchartData2018(barchartdata.jan2018, barchartdata.feb2018,barchartdata.mar2018,barchartdata.apr2018,barchartdata.may2018,barchartdata.jun2018,barchartdata.jul2018)
    })

    it('Canvas Chart Test: Validate bar chart for 2019. ',() => { //CANVAS CHART TEST FOR 2019
        barchart.clickShowNextYearData()
        browser.pause(3000)
        barchart.validateBartcharData2019(barchartdata.jan2019, barchartdata.feb2019,barchartdata.mar2019,barchartdata.apr2019,barchartdata.may2019,barchartdata.jun2019,barchartdata.jul2019)
    })
    it('Dynamic Content Test: Verify the displayed ad. ',() => { //DYNAMIC CONTENT TEST
        browser.navigateTo(`${browser.options.baseUrl}?showAd=true`)
        browser.pause(3000)
        login.typeCredentials(logindata.usernameValue, logindata.passwordValue)
        ad.assertUIElements()
    })
})