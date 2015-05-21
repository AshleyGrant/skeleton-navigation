// An example configuration file for using travis-ci and SauceLabs for continuous integration
var config = {
  // baseUrl: 'http://skeleton-navigation:9000',
  //seleniumAddress: 'http://0.0.0.0:4444',
  // add proper version number
  // seleniumServerJar: './node_modules/gulp-protractor/node_modules/protractor/selenium/selenium-server-standalone-2.45.0.jar',
  specs: ['specs/e2e/dist/*.js'],

  plugins: [{
    path: 'aurelia.protractor.js'
  }],

  allScriptsTimeout: 90000,
  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 90000
  }
};

if (process.env.TRAVIS_BUILD_NUMBER) {
  config.sauceUser = process.env.SAUCE_USERNAME;
  config.sauceKey = process.env.SAUCE_ACCESS_KEY;
  config.seleniumAddress = 'http://localhost:4445/wd/hub';
  config.capabilities = {
    'username': process.env.SAUCE_USERNAME,
    'accessKey': process.env.SAUCE_ACCESS_KEY,
    'browserName': 'chrome',
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    'build': "TRAVIS #" + process.env.TRAVIS_BUILD_NUMBER + " (" + process.env.TRAVIS_BUILD_ID + ")",
    'name': 'Travis-CI E2E'
  };
}

exports.config = config;
