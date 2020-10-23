import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import TransferPage from './transferPage.js'
//import LoginPage from '../login/loginPage.js'

// // login steps start -- THESE STEPS HAVE BEEN MOVED TO THE COMMON FOLDER

// Given('I open the login page', () => {
//     cy.visit('http://zero.webappsecurity.com/login.html')
//     LoginPage.visitLoginPage()
// })

// When('I fill username with {string}', username => {
//     LoginPage.fillUsername(username)
// })

// When('I fill password with {string}', password => {
//     LoginPage.fillPassword(password)
// })

// And('I click on submit button', () => {
//     LoginPage.submitForm()
// })

// Then('the homepage is displayed', () => {
//     cy.url().should('include', 'account-summary.html')
//     cy.get('#account_summary_tab').should('be.visible')
// })

// login steps end

Then('I click the Transfer Funds Tab', () => {
    TransferPage.clickTransferFundsTab()
})

When('I select a From Account {string}', fromAccount => {
    TransferPage.selectFromAccount(fromAccount)
})

When('I select a To Account {string}', toAccount => {
    TransferPage.selectToAccount(toAccount)
})

When('I enter an amount {int}', amount => {
    TransferPage.enterAmount(amount)
})

When('I enter a description {string}', description => {
    TransferPage.enterDescription(description)
})

When('I click the continue button', () => {
    TransferPage.clickContinue()
})

When('I verify the details', () => {
    TransferPage.verifyDetails()
})

When('I click the Submit button', () => {
    TransferPage.clickSubmit()
})

Then('the money is successfully transferred', () => {
    TransferPage.verifySuccess()
})