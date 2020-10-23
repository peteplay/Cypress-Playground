import { Then } from 'cypress-cucumber-preprocessor/steps'
import AccountsPage from '../cucumber-tests/accounts/accountsPage'

Then('the accounts page is displayed', () => {
    // cy.url().should('include', 'account-summary.html')
    // cy.get('#account_summary_tab').should('be.visible')
    AccountsPage.verifyAccountsTabIsDisplayed()
})