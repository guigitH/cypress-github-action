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
    if(run.totalFailed){
      console.error(run.totalFailed + ' tests failed')
      process.exit(run.totalFailed) 
    }
  } catch (error) {
    console.error(error.message)
    process.exit(1)
  }
})()
