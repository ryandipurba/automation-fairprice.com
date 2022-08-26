Feature: fairprice Promotion Page

    Validate 3 mandatory promotional labels: PWP , Weekly Deals, and Digital Club Exclusive

    @Home @BlueColour
    Scenario: I want to be able to submit a Blue quote
        Given I open fairprice Web
        When I click Menu Promotion
        Then Validate 3 mandatory promotional labels: PWP , Weekly Deals, and Digital Club Exclusive
        And I click tab pwp
        Then I validate label pwp on product in tab pwp


