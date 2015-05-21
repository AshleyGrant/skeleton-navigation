// An example configuration file for using travis-ci and SauceLabs for continuous integration
var config = {

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'tunnel-identifier': 'I will explain this later',
    'browserName': 'chrome'
  },

  //seleniumAddress: 'http://0.0.0.0:4444',
  // add proper version number
  // seleniumServerJar: './node_modules/gulp-protractor/node_modules/protractor/selenium/selenium-server-standalone-2.44.0.jar',
  specs: ['specs/e2e/dist/*.js'],

  plugins: [{
    path: 'aurelia.protractor.js'
  }],


  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};

if (process.env.TRAVIS_BUILD_NUMBER) {
  config.sauceUser = process.env.SAUCE_USERNAME;
  config.sauceKey = process.env.SAUCE_ACCESS_KEY;
  config.capabilities = {
    'browserName': 'chrome',
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    'build': process.env.TRAVIS_BUILD_NUMBER,
    'name': 'App Tests'
  };
}

exports.config = config;
