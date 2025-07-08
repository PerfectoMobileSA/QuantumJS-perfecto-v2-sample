@demobank
Feature: Demobank test scenarios

 Scenario: Demo Bank - LoginApplication
  Given I open browser to webpage "http://dbankdemo.com/bank/login"
  Given I login to with "jsmith@demo.io" and "Demo123!" credentials
  Then I verify successful Login
  Then I logout from the application successfully
  
