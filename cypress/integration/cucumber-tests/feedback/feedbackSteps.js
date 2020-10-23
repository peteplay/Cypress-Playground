import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import FeedbackPage from './feedbackPage.js'

Given('I open the feedbackpage', () => {
    FeedbackPage.visit()
})

When ('I complete the feedback details', () => {
    FeedbackPage.fillFeedbackForm()
}) 

When('I click on the send button', () => {
    FeedbackPage.submitFeedbackForm()
})

When('I enter a name {string}', name => {
    FeedbackPage.enterName(name)
}) 

When('I enter an email address {string}', emailAddress => {
    FeedbackPage.enterEmailAddress(emailAddress)
})

When('I enter a subject {string}', subject => {
    FeedbackPage.enterSubject(subject)
})

When('I enter a question {string}', question => {
    FeedbackPage.enterQuestion(question)
})

Given('I set the viewport to iPad', () => {
    FeedbackPage.setTabletViewport()
})

Then('the image snapshot is the same as the baseline for multiple resolutions', () => {
    FeedbackPage.compareImagesWithBaselines()
})

Then('the element snapshot is the same as the baseline for multiple resolutions', () => {
    FeedbackPage.compareElementImagesWithBaselines()
})

Then('the title should be {string}', title => {
    FeedbackPage.verifyTitle(title)
})

Then('the form should have {int} data entry fields', int => {
    FeedbackPage.verifyNoOfEntryFields(int)
}) 

Then('the placeholder for the name field should be {string}', placeholderText => {
    FeedbackPage.verifyPlaceHolderText(placeholderText)
}) 

Then('the name field should have a width of {string}', pixelWidth => {
    FeedbackPage.assertFieldWidth(pixelWidth)
})
