Feature: Transfer

    As a user I want to login
    to order to make multiple transfers


    Background: login
        Given I open the website
        When I login to my account
        Then the accounts page is displayed

    @transfer
    Scenario Outline: Transfer funds
        And I click the Transfer Funds Tab
        When I select a From Account "<From Account>"
        And I select a To Account "<To Account>"
        And I enter an amount <Amount>
        And I enter a description "<Description>"
        When I click the continue button
        And I verify the details
        And I click the Submit button
        Then the money is successfully transferred

        Examples:
            | From Account | To Account | Amount | Description          |
            | 1            | 2          | 1000   | Transfer details one |
            | 2            | 3          | 2500   | Transfer details two |
