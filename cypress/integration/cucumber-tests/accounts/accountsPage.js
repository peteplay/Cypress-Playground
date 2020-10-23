// add constants for all elements on page

import BasePage from "../components/BasePage"

const URL = 'account-summary.html'
const TAB_ACCOUNTS_SUMMARY = '#account_summary_tab'


export default class AccountsPage extends BasePage {
	static verifyAccountsTabIsDisplayed() {
		cy.url().should('include', URL)
		cy.get(TAB_ACCOUNTS_SUMMARY).should('be.visible')
	}
}

//export default AccountsPage
