define('contracts/tests/helpers/resolver', ['exports', 'contracts/resolver', 'contracts/config/environment'], function (exports, _contractsResolver, _contractsConfigEnvironment) {

  var resolver = _contractsResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _contractsConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _contractsConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});