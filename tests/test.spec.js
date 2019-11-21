
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


describe('Hackathon App - Visual Tests', ()=> {
    before(()=> {
        eyes.open(browser);
        browser.url(`${browser.options.baseUrl}`) 
    })
})
describe('Login Page - Existing UI Elements', ()=> {
    it('Assert all elements.', async()=>{ 
        //await eyes.setBatch("Login")
        await eyes.check('Existing UI Elements', Target.window());
    })
 })
/*describe('Data-Driven Test', ()=> {
    it('Assert errors when credentials are missing.', async ()=> { 
        login.typeCredentials('', '')
        await eyes.check('Missing Credentials', Target.window());  
    })

    it('Assert error when username is missing. ', async () => {
        login.typeCredentials('', logindata.passwordValue)
        await eyes.check('Missing Username', Target.window());
        //login.clearInputs()
    })
})*/



