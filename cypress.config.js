const { defineConfig } = require("cypress");
module.exports = defineConfig({
    chromeWebSecurity: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    e2e: {
        baseUrl: "http://uitestingplayground.com",
        specPattern: "./cypress/e2e/pages/*.spec.js",
        setupNodeEvents(on, config) {},
    },
});