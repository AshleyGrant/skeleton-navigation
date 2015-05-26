// An example configuration file.
var fs = require('fs');

// Use ENV vars on Travis and sauce.json locally to get credentials
if (!process.env.SAUCE_USERNAME) {
  if (!fs.existsSync('sauce.json')) {
    console.log('Create a sauce.json with your credentials based on the sauce-sample.json file.');
    process.exit(1);
  } else {
    process.env.SAUCE_USERNAME = require('./sauce').username;
    process.env.SAUCE_ACCESS_KEY = require('./sauce').accessKey;
  }
}

var config = {
  sauceUser: process.env.SAUCE_USERNAME,
  sauceKey: process.env.SAUCE_ACCESS_KEY,

  allScriptsTimeout: 120000,
  
  seleniumAddress: 'http://localhost:4445/wd/hub',

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'username': process.env.SAUCE_USERNAME,
    'accessKey': process.env.SAUCE_ACCESS_KEY,
    'browserName': 'chrome',
  },

  specs: ['specs/e2e/dist/*.js'],

  plugins: [{
    path: 'aurelia.protractor.js'
  }],

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 120000
  },
};

if (process.env.TRAVIS_BUILD_NUMBER) {
  config.capabilities = {
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    'build': "TRAVIS #" + process.env.TRAVIS_BUILD_NUMBER + " (" + process.env.TRAVIS_BUILD_ID + ")",
    'name': 'Travis-CI E2E'
  };
}

exports.config = config;
