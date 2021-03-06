// Karma configuration
// Generated on Mon Dec 05 2016 21:06:03 GMT+0200 (FLE Standard Time)

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    ngHtml2JsPreprocessor: {
      prependPrefix: '../',
    },


    // list of files / patterns to load in the browser
    files: [
      "bower_components/angular/angular.min.js",
       "bower_components/angular-resource/angular-resource.min.js",
       "bower_components/angular-ui-router/release/angular-ui-router.min.js",
       "bower_components/angular-mocks/angular-mocks.js",
        "bower_components/angularUtils-pagination/dirPagination.js",
       "bower_components/jquery/dist/jquery.js",
       "bower_components/sinon/lib/sinon.js",
       {
        pattern: 'test/**/*.json',
        included: false
      },
      'app.js',
      'js/**/*.js',
      'test/**/*.js',
      'templates/**/*.html'
    ],


    // list of files to exclude
    exclude: [],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'js/!(*plugins)/**/*.js': ['coverage'],
      'app.js': ['coverage'],
      '**/*.html': ['ng-html2js']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage', 'junit'],

    junitReporter : {
      outputDir:'test',
      outputFile: 'test-results.xml'
    },

    coverageReporter: {
      reporters: [{
        type: 'html',
        dir: 'coverage/'
      }, {
        type: 'text'
      }],
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });
};