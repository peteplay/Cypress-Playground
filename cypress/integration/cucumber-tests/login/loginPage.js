// import pages
import BasePage from "../components/BasePage"
import Navbar from "../components/Navbar"

// add constants for all elements on page
const URL = 'http://zero.webappsecurity.com/login.html'
const USERNAME_INPUT = '#user_login'
const PASSWORD_INPUT = '#user_password'
const SUBMIT_BUTTON = 'input[name="submit"]'
const ERROR_MESSAGE = '.alert-error'

export default class LoginPage extends BasePage {
    
    static login(username, password) {
        Navbar.clickSignIn()
        cy.login(username, password)
    }
    
    static visitLoginPage() {
        cy.visit(URL)
    }

    static fillUsername(name) {
        cy.get(USERNAME_INPUT).type(name)
    }

    static fillPassword(password) {
        cy.get(PASSWORD_INPUT).type(password)
    }

    static submitForm() {
        cy.get(SUBMIT_BUTTON).click()
    }

    static verifyAlertError(errorText) {
        cy.get(ERROR_MESSAGE).should('be.visible').and('contain', errorText)
    }

}

//export default LoginPage