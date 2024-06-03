@perfecto
Feature: Perfecto Example Feature

 Scenario: Install Application
  Given I install application "PUBLIC:Digital-Bank-1.4.apk"

 Scenario: Start and Stop Application by name
  Given I start application by name "Digital Bank"
  Then I close application by name "Digital Bank"
 
Scenario: Start and Stop Application by ID
  Given I start application by id "xyz.digitalbank.demo"
  Then I close application by id "xyz.digitalbank.demo"

Scenario: Verify presence of text using visual analysis
  Given I start application by id "xyz.digitalbank.demo"
  Then I should see text "1Digital Bank"

Scenario: Assert presence of text using visual analysis
  Given I start application by id "xyz.digitalbank.demo"
  Then I must see text "1Digital Bank"

Scenario: Uninstall Application by name
  Given I install application "PUBLIC:Digital-Bank-1.4.apk"
  When I uninstall application by name "Digital Bank"

Scenario: Uninstall Application by id
  Given I install application "PUBLIC:Digital-Bank-1.4.apk"
  When I uninstall application by id "xyz.digitalbank.demo"