exports.config = {
  tests: './tests/*.spec.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://www.saucedemo.com/',
      show: false,
      browser: 'chromium',
      waitForTimeout: 5000
    },
    REST: {
    endpoint: 'https://reqres.in',
    onRequest: (request) => {
      request.headers = {
        'Content-Type': 'application/json',
        'x-api-key': 'reqres-free-v1'
      };
    }
  }
  },
  include: {
    I: './steps_file.js'
  },
  plugins: {
    pauseOnFail: {},
    retryFailedStep: { enabled: true },
    tryTo: { enabled: true },
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy',
      outputDir: 'output/allure-results',
    }
  },
  name: 'tests_for_nexontis'
};
