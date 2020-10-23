Feature: Pokemon APIs

    As a user I want to intercept API messages

    @pokemon
    Scenario: Send a request for Poison Point
        Given I have navigated to the BBC weather website
        When I enter "Southfields" I should be able to capture the GET request and validate the response
        
