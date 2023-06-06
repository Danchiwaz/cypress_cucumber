import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { loginPage } from '../../pages/LoginPage';
import Utils from '../../utils';

// Define your step definitions here
Given('I open the application', () => {
  cy.visit('/');
});

When('A User types email {string}', (email) => {
  // cy.get('#user-name').type(username);
  // loginPage.typeUsername(username);
  Utils.type('#email-field', email)
});
When("A User types password {string}", (password) => {
    // cy.get('#password').type(password);
    // loginPage.typePassword (password)
    Utils.type('#password-field', password)
})
When("A User clicks login button", () => {
    // cy.get("#login-button").click();
    // loginPage.clickLoginBtn();
    Utils.click('button[type="submit"]')
    cy.wait(2000)
})

Then("The User should be redirected to /dashboard", () => {
    cy.url().should("include", "/dashboard");
});
