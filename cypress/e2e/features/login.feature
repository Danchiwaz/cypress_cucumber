Feature: Example feature
  Background:
    Given I open the application
  Scenario: Success Login
    When I type username "standard_user"
    When I type password "secret_sauce"
    When I click login button
    Then I should be redirected to /inventory.html
