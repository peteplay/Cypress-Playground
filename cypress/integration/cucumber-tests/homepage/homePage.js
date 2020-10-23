// add constants for all elements on page

import BasePage from "../components/BasePage"
import { url } from "../../../../config.js"

//const 

export default class LoginPage extends BasePage {
    
    static navigateToHomepage() {
        cy.visit(url)
    }
}