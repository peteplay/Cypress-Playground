Feature: Login to the website

    As an invalid user
    I must be prevented from logging in
        
    As a valid user
    I want to login to the website
    So I can to manage my account

    @invalidLogin @login
    Scenario: Invalid login
        Given I open the website
        When I attempt to login to my account with invalid credentials 
        Then I should see an error message "Login and/or password are wrong"   

    @validLogin @login
    Scenario: Valid login
        Given I open the website
        When I login with valid credentials
        Then the accounts page is displayed
        And I see "Zero - Account Summary" in the title
        When I logout of my account
        Then I see "index.html" in the url
        And I see the SignIn button
