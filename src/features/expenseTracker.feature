@expenseTracker
Feature: Scenario for Expense Tracker application

@expenseTracker_1
Scenario: Expense Tracker - Add Flight Expenses
  Given I login to the application with "test@perfecto.com" and "test123" credentials
  Then Login should be successful
  When I will create the Flight expense report
  Then the report should successfully created
  Then I logout from the application

