import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import PokeapiPage from './pokeapiPage.js'


Given('I navigate to the pokeapi page', () => {
    PokeapiPage.navigateTo()
})

Given('I enter {string}', (url) => {
    PokeapiPage.submitPokemon(url)
})

Then('I should get the details from the stub rather than from the server', () => {
    PokeapiPage.getStub()
})
