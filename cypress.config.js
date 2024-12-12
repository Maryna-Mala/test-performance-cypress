import { defineConfig } from "cypress";
const cypressSplit = require("cypress-split");

export default defineConfig({
  e2e: {
    setupNodeEvents() {
      cypressSplit(on, config);
      return config;
    },
    baseUrl: "https://idealistcoffee.com/",
    viewportWidth: 1920,
    viewportHeight: 1080,
  },
});
