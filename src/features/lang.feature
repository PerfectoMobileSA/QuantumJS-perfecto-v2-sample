@wiki @lang
Feature: Perfecto

  Scenario: Esp Large size
    Given I resize to a 1024x768 screen size
    And I go to the "HomePage" page
    Then I should be on the "HomePage" page
    And I select "Espanol" language on home page
    And I select discussion link on home page
    And I select portada link on home page
    And I wait for 1 seconds


  Scenario: Esp Mobile
    Given I resize to a 1024x768 screen size
    And I go to the "HomePage" page
    Then I should be on the "HomePage" page
    Given I resize to a 200x400 screen size
    And I select "Espanol" language on home page
    And I select discussion link on home page
    And I select portada link on home page
    And I wait for 1 seconds



