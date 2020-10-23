Feature: pokeapi

    As a user
    I want to validate the data returned from an API request

    Scenario: Pokemon validate request
        Given I send a get request to the pikachu endpoint
        Then I can check for a 200 response
        And I can check the name "pikachu" in the body of the response

    Scenario: Validate invalid endpoint
        Given I send a get request to an invalid pokemon endpoint
        Then I need to check for a 404 status response

    Scenario: Stub an endpoint
        Given I navigate to the pokeapi page 
        And I enter "pokemon/34"
        Then I should get the details from the stub rather than from the server
