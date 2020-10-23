Feature: Feedback

    As a valid user
    I want to provide some Feedback

    Background: Navigate to feedback page
        Given I open the website
        And I navigate to the feedback page
        #And I set the viewport to iPad

    @assertions @feedback
    Scenario: Form assertions
        Then the title should be "Feedback"
        And the form should have 4 data entry fields
        And the placeholder for the name field should be "Your Name"
        And the name field should have a width of "255px"

    @feedback @fixture
    Scenario: Submit feedback using fixture file
        When I complete the feedback details
        And I click on the send button
        Then I see "/sendFeedback.html" in the url

    @feedback @fixture @snapshot
    Scenario: Submit feedback visual regression various viewports
        When I complete the feedback details
        Then the image snapshot is the same as the baseline for multiple resolutions
        When I click on the send button
        Then I see "/sendFeedback.html" in the url

    @feedback @fixture @snapshot @elementSnapshot
    Scenario: Submit feedback visual regression various viewports single element
        When I complete the feedback details
        Then the element snapshot is the same as the baseline for multiple resolutions
        When I click on the send button
        Then I see "/sendFeedback.html" in the url

    @feedback 
    # @focus
    Scenario Outline: Submit multiple Feedback forms using scenario outline examples
        When I enter a name "<Name>"
        And I enter an email address "<Email Address>"
        And I enter a subject "<Subject>"
        And I enter a question "<Question>"
        And I click on the send button
        Then I see "/sendFeedback.html" in the url

        Examples:
            | Name  | Email Address   | Subject       | Question       |
            | John  | john@email.com  | Subject one   | Question one   |
            | Mary  | mary@email.com  | Suject two    | Question two   |
            | David | david@email.com | Subject three | Question three |
