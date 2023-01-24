const cypress = require('cypress');

(async function testRunner() {

  try {
    const run = await cypress.run({
      spec: "cypress/e2e/test/*.cy.ts",
      browser: 'chrome',
      configFile: 'cypress/cypress.config.ts',
      config: {
        baseUrl: 'https://example.cypress.io',
        video: false,
      },
      env: {
      },
    })
    if (run.result.failures) {
      console.error('Could not execute tests: ' + run.result.message)
    }
  } catch (error) {
    console.error(error.message)
  }
})()
