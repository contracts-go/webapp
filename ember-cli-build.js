/*jshint node:true*/
/* global require, module, process */
const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const isTesting = process.env.EMBER_ENV === 'test';

module.exports = function(defaults) {
  const app = new EmberApp(defaults, {
    // Turn off linting while testing
    'ember-cli-mocha': {
      useLintTree: false
    },
    hinting: !isTesting
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
