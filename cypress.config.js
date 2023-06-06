const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  
  e2e: {
    baseUrl: "https://ashy-hill-09d0d640f.2.azurestaticapps.net",
    chromeWebSecurity: false,
    specPattern: "cypress/e2e/features/*.feature",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("file:preprocessor", cucumber());
    },
    env: {
      allureReuseAfterSpec: true,
    },
  },
});
