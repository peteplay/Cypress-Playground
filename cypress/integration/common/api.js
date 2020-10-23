import { Given, Then } from 'cypress-cucumber-preprocessor/steps'


Given('I send a get request to the pikachu endpoint', () => {
	cy.request('https://pokeapi.co/api/v2/pokemon/25').as('pokemon')
	cy.get('@pokemon')
		.its('headers')
		.its('content-type')
		.should('include', 'application/json; charset=utf-8')
})

Then('I can check for a {int} response', (status) => {
	cy.request('https://pokeapi.co/api/v2/pokemon/25').as('pokemon')
	cy.get('@pokemon').its('status').should('equal', status)
})

Then(
	'I can check the name {string} in the body of the response', (pokemanName) => {
		cy.request('https://pokeapi.co/api/v2/pokemon/25').as('pokemon')
		cy.get('@pokemon').its('body').should('include', { name: pokemanName })
	}
)

Given('I send a get request to an invalid pokemon endpoint', () => {
	cy.log('The request will be sent in the next step')
})

Then('I need to check for a {int} status response', status => {
	cy.request({
		method: 'GET',
		url: 'https://pokeapi.co/api/v2/pokemon/1000',
		failOnStatusCode: false,
	}).as('pokemon')
	cy.get('@pokemon').its('status').should('equal', status)
})





