export default class AccountLinks {
    static clickAccountSummaryTab() {
        cy.get('#account_summary_tab').click()
    }

    static clickAccountActivityTab() {
        cy.get('account_activity_tab').click()
    }

    static clickTransferFundsTab() {
        cy.get('#transfer_funds_tab').click()
    }

    static clickPayBillsTab() {
        cy.get('#pay_bills_tab').click()
    }

    static clickMyMoneyMapTab() {
        cy.get('#money_map_tab').click()
    }

    static clickOnlineStatementsTab() {
        cy.get('#online_statements_tab').click()
    }
}