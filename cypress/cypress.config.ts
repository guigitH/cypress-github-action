import { defineConfig } from"cypress"

export default defineConfig({
    screenshotOnRunFailure: false,
    e2e: {
        supportFile: false,
    },
})