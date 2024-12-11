# Performance testing using [Cypress](https://www.cypress.io/)

## About the Tool

This project contains Playwright test scripts tailored to assess the web performance of [Idealist Coffee](https://idealistcoffee.com/). With Cypress, you can easily create tests for your modern web applications, debug them visually, and automatically run them in your continuous integration builds.

The primary goal of the project is to provide a baseline for evaluating Cypress's capabilities in handling parallel test execution.

## How to Setup

1. **Clone the Repository**

    Clone the project repository to your local machine using the following command:

    `https://github.com/Maryna-Mala/test-performance-cypress`

2. **Navigate to the Project Directory**

    Change your current directory to the project folder

3. **Install Dependencies**

    Ensure you have Node.js installed on your system. Then, install the necessary dependencies by running:

    `npm install`

4. **Install Cypress**

    If Cypress is not already installed globally, you can install it using the command:

    `npm install cypress --save-dev`

5. **Open Cypress**

    Once all dependencies are installed, open Cypress using:

    `npm run test`

    This command will open the Cypress Test Runner, allowing you to select and run tests.


## How to run

To execute the test cases in the Plaiwrigh project using headless mode, follow these instructions:

1. **Run Tests in Interactive Mode**

    Open Cypress in interactive mode using:

    `npm run test`

    Choose a browser of your preference (Chrome, Edge, or Firefox).

    Click on any test from the list to execute it.


2. **Run Tests in Headless Mode**

    You can run tests directly in the terminal without a GUI, which is faster and useful for CI/CD pipelines:

    `npm run test:run`
    
2. **Run Tests Manually**

    To run tests manually, you can do it straight in the GitHub Actions:

    - Open "Actions" tab
    - In the sidemenu choose "CI/CD Manually" workflow
    - Click on the "Run workflow" and choose the appropriate branch

