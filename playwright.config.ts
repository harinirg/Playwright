import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
 import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const envName=process.env.ENV || 'qa';
dotenv.config({ path:`./env/.env.${envName}`});

export default defineConfig({
  testDir: './tests',
  timeout: 70000,
  //repeatEach:3,

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1:2,

  // Add reporters here
  reporter: [
    ['html', { open: 'always' }],
    ['allure-playwright']
  ],
  testMatch:["tests/radiobutton.test.ts"],

  use: {
    trace: 'retain-on-failure',
    browserName: 'chromium',
    headless: true,
    launchOptions:{slowMo:5000,},
    video: 'retain-on-failure',
    screenshot: 'only-on-failure'
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] }
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] }
    }
  ]
});