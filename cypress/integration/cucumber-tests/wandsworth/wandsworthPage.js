// import pages
import BasePage from "../components/BasePage"

// add constants for all elements on page
const WANDSWORTH_URL = 'https://www.wandsworth.gov.uk/'

export default class wandsworthPage extends BasePage {
    
    static visitPage() {


        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })


        cy.clearCookies()

        cy.server()
        cy.route('GET', '**/suggestions/getsuggestions', 'fixture:wandsworth.json')

        cy.visit(WANDSWORTH_URL)



        

    }

}
