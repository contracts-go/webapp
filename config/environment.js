/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'contracts',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    torii: {
       sessionServiceName: 'session'
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_TRANSITIONS = true;
    ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.firebase = {
      apiKey: "AIzaSyB4SyxYmNATRfLRmsj-8zV6pl9oQA_i--k",
      authDomain: "test-contracts-go.firebaseapp.com",
      databaseURL: "https://test-contracts-go.firebaseio.com",
      storageBucket: "test-contracts-go.appspot.com",
    }
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';

    ENV.firebase = {
      apiKey: "AIzaSyB4SyxYmNATRfLRmsj-8zV6pl9oQA_i--k",
      authDomain: "test-contracts-go.firebaseapp.com",
      databaseURL: "https://test-contracts-go.firebaseio.com",
      storageBucket: "test-contracts-go.appspot.com",
    }
  }

  if (environment === 'production') {
    ENV.firebase = {
      apiKey: "AIzaSyCQzpSfkf6y8PVUV1pzciwzugWvicebQA0",
        authDomain: "contracts-go.firebaseapp.com",
        databaseURL: "https://contracts-go.firebaseio.com",
        storageBucket: "contracts-go.appspot.com",
    };
  }

  return ENV;
};
