// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// ***************************************

import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command'

addMatchImageSnapshotCommand({
	failureThreshold: 0.00, // zero tolerance for pixels
	failureThresholdType: 'percent', // or pixels
	customDiffConfig: { threshold: 2.0 },
	capture: 'viewport'
})

// commonly used when navigating to a new page to check that an element is visible
Cypress.Commands.add('isVisible', (selector) => {
	cy.get(selector).should('be.visible')
})

// to check that an element is no longer displayed after an action
Cypress.Commands.add('isHidden', (selector) => {
	cy.get(selector).should('not.exist')
})

// set the viewport with device name or width/height
Cypress.Commands.add('setResolution', (size) => {
	if (Cypress._.isArray(size)) {
		cy.viewport(size[0], size[1])
	} else {
		cy.viewport(size)
	}
})

Cypress.Commands.add('login', (username, password) => {
	cy.get('#user_login').should('be.visible')
	cy.get('#user_login').type(username)
	cy.get('#user_password').type(password)
	cy.get('#user_remember_me').click() // multiple options for signin button //cy.get('input[type="submit"]').click()
    cy.get('input[name="submit"]').click() //cy.get('input[name="submit"]').click()
})
