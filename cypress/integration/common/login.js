import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
//import LoginPage from '../login/loginPage.js'
import LoginPage from '../cucumber-tests/login/loginPage'
import HomePage from '../cucumber-tests/homepage/homePage'
import Navbar from '../cucumber-tests/components/Navbar'
import { url, login_username, login_password } from '../../../config.js'

// login steps start

Given('I open the website', () => {
    HomePage.navigateToHomepage()
})

Given('I open the login page', () => {
    //cy.visit('http://zero.webappsecurity.com/login.html')
    //cy.visit(url)
    Navbar.clickSignIn()
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

// this uses the helper defined in support/command.js
When('I login to my account', () => {
    LoginPage.login(login_username, login_password)
})

When('I login with valid credentials', () => {
    LoginPage.login(login_username, login_password)
})

When('I logout of my account', () => {
    Navbar.logout()
}) 

Then('I see the SignIn button', () => {
    Navbar.displaySignInButton()
})

