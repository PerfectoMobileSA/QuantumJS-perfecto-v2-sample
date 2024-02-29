@wiki @wiki1 @wiki2
Feature: Perfecto Wiki - search

  @@ScenarioTest
   Scenario: Go to wiki
    And I wait for 1 seconds
    Given I resize to a 1024x768 screen size
    And I go to the "HomePage" page
    Then I should be on the "HomePage" page
    And I search for "Perfecto" value
    When I resize to a 200x400 screen size
    And I wait for 1 seconds
