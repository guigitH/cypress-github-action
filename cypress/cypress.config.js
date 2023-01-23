const { defineConfig } = require("cypress")

module.exports = defineConfig({
    screenshotOnRunFailure: false,
    e2e: {
        supportFile: false,
    },
})