import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import BBCWeatherPage from './bbcweatherPage.js'

Given('I have navigated to the BBC weather website', () => {
    BBCWeatherPage.visitPage()
})

When('I enter {string} I should be able to capture the GET request and validate the response', (town) => {
    BBCWeatherPage.validateResponse(town)
})


