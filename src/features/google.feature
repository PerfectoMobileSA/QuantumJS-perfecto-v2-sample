@Web
Feature: Google Search

  @WebSearch
  Scenario: Search Quantum
    Given I go to the "google" page
    When I search for "quantum perfecto" wrong locator
    Then It should have "Quantum Integration With Perfecto" in search results


  @WebSearch
  Scenario: Search Quantum
    Given I go to the "google" page
    When I search for "quantum perfecto"
    Then It should have "Quantum Integration With Perfecto" in search results