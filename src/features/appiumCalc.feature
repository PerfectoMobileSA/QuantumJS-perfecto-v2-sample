@appium
Feature: Appium Example Feature

 Scenario: Appium Calc Example Scenario
  Given I start application by name "Calculator"
  When I add "3" to "5"
  Then the result should be "8"
