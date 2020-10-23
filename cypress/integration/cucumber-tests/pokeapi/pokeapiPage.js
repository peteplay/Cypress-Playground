// import pages
import BasePage from "../components/BasePage"

const POKEMAN_URL = 'https://pokeapi.co/'
const INPUT_URL = '#url-input'
const BUTTON_SUBMIT = 'Submit'

export default class PokeapiPage extends BasePage {
    
    static navigateTo() {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit(POKEMAN_URL)
    }

    static submitPokemon(url) {
        cy.get(INPUT_URL).clear()
        cy.get(INPUT_URL).type(url)
    }

    static getStub() {
        cy.server()
        cy.route('GET', '**/pokemon/34', 'fixture:pokemon.json')

        cy.contains(BUTTON_SUBMIT).click()
    }
}
    