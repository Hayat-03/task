// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  timeout: 60000,
  testDir: './tests',
  //testMatch:'../tests/login.spec.js',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['html', { outputFolder: 'playwright-report' }]],
  use: {
    baseURL: 'https://petstore.octoperf.com',
    trace: 'on-first-retry',
    viewport: null, // Let the page be maximized
    launchOptions: {
      headless: false, // Run tests in headful mode
      args: ['--start-maximized'], // Start browser in maximized mode
      slowMo:50
    },
    screenshot: 'on', // Capture screenshots on failure
    video:'on'
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // Other browsers can be added here
  ],

  // Uncomment if you need a local dev server to run before tests
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
