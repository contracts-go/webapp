define('contracts/app', ['exports', 'ember', 'contracts/resolver', 'ember-load-initializers', 'contracts/config/environment'], function (exports, _ember, _contractsResolver, _emberLoadInitializers, _contractsConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _contractsConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _contractsConfigEnvironment['default'].podModulePrefix,
    Resolver: _contractsResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _contractsConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});