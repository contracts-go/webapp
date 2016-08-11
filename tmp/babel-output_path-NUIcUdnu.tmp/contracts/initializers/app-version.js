define('contracts/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'contracts/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _contractsConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_contractsConfigEnvironment['default'].APP.name, _contractsConfigEnvironment['default'].APP.version)
  };
});