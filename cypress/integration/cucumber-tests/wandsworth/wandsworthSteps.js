import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import WandsworthPage from './wandsworthPage.js'

Given('I have navigated to the Wandsworth website', () => {
    WandsworthPage.visitPage()
})