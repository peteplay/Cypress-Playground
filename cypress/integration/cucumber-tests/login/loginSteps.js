import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from './loginPage.js'

Given('I open the login page', () => {
    //cy.visit('http://zero.webappsecurity.com/login.html')
    LoginPage.visitLoginPage()
})

When('I fill username with {string}', username => {
    LoginPage.fillUsername(username)
})

When('I fill password with {string}', password => {
    LoginPage.fillPassword(password)
})

And('I click on submit button', () => {
    LoginPage.submitForm()
})

Then('I should see an error message {string}', errorMessage => {
    LoginPage.verifyAlertError(errorMessage)
})

When ('I attempt to login to my account with invalid credentials', () => {
    LoginPage.login('invalid username', 'invalid password')
})