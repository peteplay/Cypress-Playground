const TRANSFER_FUNDS_TAB = "#transfer_funds_tab"
const FROM_ACCOUNT_INPUT = '#tf_fromAccountId'
const TO_ACCOUNT_INPUT = '#tf_toAccountId'
const AMOUNT_INPUT = '#tf_amount'
const CONTINUE_BUTTON = 'button[type="submit"]'
const DESCRIPTION_INPUT = '#tf_description'
const VERIFY_TEXT = '.board-content'
const SUBMIT_BUTTON = 'button[type="submit"]'
const ALERT_SUCCESS = '.alert-success'

export default class TransferPage{
    static clickTransferFundsTab() {
        cy.get(TRANSFER_FUNDS_TAB).click()
    } 

    static selectFromAccount(fromAccount) {
        cy.get(FROM_ACCOUNT_INPUT).select(fromAccount)
    }

    static selectToAccount(toAccount) {
        cy.get(TO_ACCOUNT_INPUT).select(toAccount)
    }

    static enterAmount(amount) {
        cy.get(AMOUNT_INPUT).type(amount)
    }

    static enterDescription(description) {
        cy.get(DESCRIPTION_INPUT).type(description)
    }

    static clickContinue() {
        cy.get(CONTINUE_BUTTON).click()
    }

    static verifyDetails() {
        cy.get(VERIFY_TEXT).should('contain', 'Please verify that the following transaction is correct')
    }

    static clickSubmit() {
        cy.get(SUBMIT_BUTTON).click()
    }

    static verifySuccess() {
        cy.get(ALERT_SUCCESS).should('be.visible').and('contain', 'You successfully submitted your transaction')
    }
}

//export default TransferPage