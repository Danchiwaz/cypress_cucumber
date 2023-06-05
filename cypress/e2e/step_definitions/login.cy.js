import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

// Define your step definitions here
Given('I open the application', () => {
  cy.visit('/');
});

When('I type username', () => {
  cy.get('#user-name').type("standard_user");
});
When("I type password", () => {
    cy.get('#password').type("secret_sauce");
})
When("I click login button", () => {
    cy.get("#login-button").click();
})

Then("I should be redirected to /inventory.html", () => {
    cy.url().should("include", "/inventory.html");
});
