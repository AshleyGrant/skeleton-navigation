// Karma configuration for Travis-CI/Open Sauce
var fs = require('fs');


module.exports = function(config) {
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

  var tunnelIdentifier = process.env.TRAVIS_JOB_NUMBER;


  // Browsers to run on Sauce Labs
   var customLaunchers = {
     'SL_Chrome': {
       base: 'SauceLabs',
       browserName: 'chrome'
     },
    //  'SL_Firefox': {
    //    base: 'SauceLabs',
    //    browserName: 'firefox',
    //  }
   };

  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jspm', 'jasmine'],

    jspm: {
      // Edit this to your needs
      loadFiles: ['src/**/*.js', 'test/unit/**/*.js'],
      serveFiles: ['src/**/*.js', 'test/unit/**/*.js'],
      paths: {
        '*': '*.js'
      }
    },

    // list of files / patterns to load in the browser
    files: [],


    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'test/**/*.js': ['babel'],
      'src/**/*.js': ['babel']
    },
    'babelPreprocessor': {
      options: {
        sourceMap: 'inline',
        modules: 'system',
        moduleIds: false,
        optional: [
          "es7.decorators",
          "es7.classProperties"
        ]
      }
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['dots', 'saucelabs'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    sauceLabs: {
      testName: 'Aurelia Skeleton Navigation Tests',
      tunnelIdentifier: process.env.TRAVIS_JOB_NUMBER,
      // startConnect: false
    },

    captureTimeout: 120000,
    browserNoActivityTimeout: 0,

    customLaunchers: customLaunchers,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: Object.keys(customLaunchers),


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
