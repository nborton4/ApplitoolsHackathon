/**
 * PAGE MODEL FOR REQUIRED ELEMENTS/FUNCTIONS FOR LOGIN PAGE
 */

const { assertElement , assertText, assertPlaceholder, assertCheckboxStatus} = require ('../util/assert_utils')

class login{

    get imgLogo() { return $("img[src='img/logo-big.png']")}
    get linkLogo() { return $("a[href='index.html']") }

    get header() { return $("h4") }

    get labelUsername() { return $(".form-group:nth-child(1) label") }
    get inputUsername() { return $("#username") }
    get iconUsername() { return $(".os-icon-user-male-circle")}

    get labelPassword() { return $(".form-group:nth-child(2) label") }
    get inputPassword() { return $("#password") }
    get iconPassword() { return $(".os-icon-fingerprint") }

    get buttonLogin() { return $("#log-in") }

    get labelRememberMe() { return $("label.form-check-label") }
    get checkboxRememberMe() { return $("input.form-check-input") }

    get imgTwitter(){ return $("img[src='img/social-icons/twitter.png']") }
    get imgFacebook() { return $("img[src='img/social-icons/facebook.png']") }
    get imgLinkedin() { return $("img[src='img/social-icons/linkedin.png']") }

    /**
     * Errors/alerst
     */
    get alertMessage() {return $(".alert-warning") }

    assertUIElements(){
        let assertItems = [
            this.imgLogo,
            this.linkLogo,
            this.header,
            this.labelUsername,
            this.inputUsername,
            this.iconUsername,
            this.labelPassword,
            this.inputPassword,
            this.iconPassword,
            this.buttonLogin,
            this.labelRememberMe,
            this.checkboxRememberMe,
            this.imgTwitter,
            this.imgFacebook,
            this.imgLinkedin
        ];
        assertItems.map(item => assertElement(item));
        return this;
    }

     typeCredentials(usernameValue, passwordValue){
        this.inputUsername.setValue(usernameValue)
        this.inputPassword.setValue(passwordValue)
        this.buttonLogin.click()
    }

    assertMissingCredentialsErrors(){
        try{
            this.alertMessage.waitForDisplayed()
            let alertMessageText = this.alertMessage.getText()
            expect(alertMessageText === "Both Username and Password must be present")
            browser.refresh()
        }catch{
            console.log(`Error: Alert message not found! Error Url: ${browser.getUrl()}`)
        }
        return this
    }

    assertMissingUsernameError(){
        try{
            this.alertMessage.waitForDisplayed()
            let alertMessageText = this.alertMessage.getText()
            expect(alertMessageText === "Username must be present")
            browser.refresh()
        }catch{
            console.log(`Error: Alert message not found! Error Url: ${browser.getUrl()}`)
        }
        return this
    }

    assertMissingPasswordError(){
        try{
            this.alertMessage.waitForDisplayed("Error")
            let alertMessageText = this.alertMessage.getText()
            expect(alertMessageText === "Password must be present")
            browser.refresh()
        }catch{
            console.log(`Error: Alert message not found! Error Url: ${browser.getUrl()}`)
        }
        return this
    }

    assertSuccessfulLogin(){
        expect(browser.getTitle() === "ACME demo app")
        return this
    }

    clearInputs(){
        this.inputUsername.clearValue()
        this.inputPassword.clearValue()
    }

    assertPageElements(){
        this.assertUIElements()

        assertText(this.header, "Login Form")
        assertText(this.labelUsername, "Username")
        assertText(this.labelPassword, "Password")
        assertText(this.buttonLogin, "Log In")
        assertText(this.labelRememberMe, "Remember Me")

        assertCheckboxStatus(this.checkboxRememberMe, false)

        assertPlaceholder(this.inputUsername, "Enter your username")
        assertPlaceholder(this.inputPassword, "Enter your password")
    }
}const instance = new login()
Object.freeze(instance)
module.exports = instance