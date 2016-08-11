define('contracts/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'contracts/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _contractsConfigEnvironment) {

  var name = _contractsConfigEnvironment['default'].APP.name;
  var version = _contractsConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});