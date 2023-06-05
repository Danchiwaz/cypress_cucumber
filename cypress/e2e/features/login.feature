Feature: Example feature
  Background:
    Given I open the application
  Scenario: Success Login
    When I type username
    When I type password
    When I click login button
    Then I should be redirected to /inventory.html
