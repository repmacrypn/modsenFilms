import {defineConfig} from 'cypress'

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    testIsolation: false,
    baseUrl: 'http://localhost:5000'
  }
})
