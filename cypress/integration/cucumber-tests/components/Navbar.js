export default class Navbar {
    static clickOnLogo() {
        cy.get('.brand').click()
    }

    static search(test) {
        cy.get('#searchTerm').type(`${text} {enter}`)
    }

    static clickSignIn() {
        cy.get('#signin_button').click()
    }

    static clickSettings() {
        cy.contains('Settings').click()
    }

    static logout() {
        cy.contains('username').click()
        cy.get('#logout_link').click()
    }

    static displaySignInButton() {
        cy.isVisible('#signin_button')
    }

    static navigateToFeedback() {
        cy.contains('Feedback').click()
    }
}