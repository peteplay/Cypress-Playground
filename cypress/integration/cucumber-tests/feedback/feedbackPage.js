// import pages
import BasePage from "../components/BasePage"
const sizes = ['iphone-x', 'ipad-2', [1200, 800]]

const URL = 'http://zero.webappsecurity.com/feedback.html'
const NAME_INPUT = '#name'
const EMAIL_INPUT = '#email'
const SUBJECT_INPUT = '#subject'
const COMMENT_INPUT = '#comment'
const SUBMIT_BUTTON = 'input[name="submit"]'
const TEST_HEADER = '#feedback-title'

export default class FeedbackPage extends BasePage {
    static visit() {
        cy.visit(URL)
    }

    static fillFeedbackForm() {
        cy.fixture('feedback').then(data => {
            cy.get(NAME_INPUT).type(data.name)
            cy.get(EMAIL_INPUT).type(data.email)
            cy.get(SUBJECT_INPUT).type(data.subject)
            cy.get(COMMENT_INPUT).type(data.message)
         })
    }

    static compareImagesWithBaselines() {
        sizes.forEach(size => {
            cy.setResolution(size)
            cy.matchImageSnapshot(`Image resolution: ${size}`)
        })
    }

    static compareElementImagesWithBaselines() {
        sizes.forEach(size => {
            cy.setResolution(size)
            cy.get(COMMENT_INPUT).matchImageSnapshot(`Element Image resolution: ${size}`)
        })
    }

    static submitFeedbackForm() {
        cy.get(SUBMIT_BUTTON).click()
    }

    static enterName(name) {
        cy.get(NAME_INPUT).type(name)
    }

    static enterEmailAddress(emailaddress) {
        cy.get(EMAIL_INPUT).type(emailaddress)
    }

    static enterSubject(subject) {
        cy.get(SUBJECT_INPUT).type(subject)
    }

    static enterQuestion(question) {
        cy.get(COMMENT_INPUT).type(question)
    }

    static verifyTitle(title) {
        cy.get(TEST_HEADER).should('have.text', title)
    }

    static verifyNoOfEntryFields(int) {
        cy.get('.control-group').should('have.length', int)
    }

    static verifyPlaceHolderText(placeholderText) {
        cy.get(NAME_INPUT).invoke('attr', 'placeholder').should('contain', placeholderText)
    }

    static assertFieldWidth(pixelWidth) {
        // you can get an element's CSS property
        cy.get(NAME_INPUT).invoke('css','width').should('equal', pixelWidth)
        // alternatetively
        cy.get(NAME_INPUT).should('have.css', 'width', pixelWidth)
    }
}

//export default FeedbackPage