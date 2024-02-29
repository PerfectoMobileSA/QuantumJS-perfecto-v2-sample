@wiki @donate
Feature: Perfecto Wiki - donate

  Scenario: Donate
    Given I go to the "HomePage" page
    Then I should be on the "HomePage" page
    And I select "English" language on home page
    And I select donate to wikipedia link on home page
    And I select the amount and the payment method on donate page
    And I fill the form details on donate page
    And I wait for 1 seconds


