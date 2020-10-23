import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import Navbar from '../cucumber-tests/components/Navbar'

Given('I navigate to the feedback page', () => {
    Navbar.navigateToFeedback()
})

