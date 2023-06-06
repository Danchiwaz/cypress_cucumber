Feature: Example feature
  Background:
    Given I open the application
  Scenario: Success Login
    When A User types email "test@test.com"
    When A User types password "Test1234!"
    When A User clicks login button
    Then  The User should be redirected to /dashboard
