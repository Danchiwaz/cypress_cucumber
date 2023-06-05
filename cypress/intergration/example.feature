Feature: Example feature
  Scenario: Clicking the button
    Given I open the application
    When I type username
    When I type password
    When I click login button
    Then I should be redirected to /inventory.html
