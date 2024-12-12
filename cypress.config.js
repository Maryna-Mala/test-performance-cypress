const { defineConfig } = require("cypress");
const cypressSplit = require("cypress-split");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      cypressSplit(on, config);
      return config;
    },
    baseUrl: "https://idealistcoffee.com/",
    viewportWidth: 1920,
    viewportHeight: 1080,
  },
});
