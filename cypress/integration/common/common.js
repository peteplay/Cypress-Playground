import { defineStep } from 'cypress-cucumber-preprocessor/steps'

// add all shared steps here that can be used across all features

defineStep('I want to wait {int} milliseconds', time => {
    cy.wait(time)
})

defineStep('I see {string} in the title', title => {
    cy.title().should('include', title)
})

defineStep('I see {string} in the url', url => {
    cy.url().should('include', url)
})

defineStep('I reload the browser', () => {
    cy.reload()
})

