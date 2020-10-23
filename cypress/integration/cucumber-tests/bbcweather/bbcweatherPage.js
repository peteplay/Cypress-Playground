// import pages
import BasePage from "../components/BasePage"

// add constants for all elements on page
const BBC_WEATHER_URL = 'https://www.bbc.co.uk/weather'
const INPUT_BBC_ENTER_TOWN = '#ls-c-search__input-label'

export default class BBCWeatherPage extends BasePage {
    
    static visitPage() {
        cy.visit(BBC_WEATHER_URL)
    }

    static validateResponse(town) {
        // the server needs to be decalared before the request is sent
        cy.server()
        cy.route('GET', '**Southfields&format=json').as('getWeather')

        cy.get(INPUT_BBC_ENTER_TOWN).type(town)
        cy.get(INPUT_BBC_ENTER_TOWN).type('{enter}')
        cy.url().should('include', '6941032')

        cy.wait('@getWeather')
        cy.get('@getWeather').then( xhr => {
            console.log(xhr)
            expect(xhr.status).to.equal(200)
            expect(xhr.response.body.response.locations[0].name).to.equal('Southfields')
            expect(xhr.response.body.response.locations[0].country).to.equal('GB')
            expect(xhr.response.body.response.locations[0].longitude).to.equal(-0.20415)
        }) 
    }
}

