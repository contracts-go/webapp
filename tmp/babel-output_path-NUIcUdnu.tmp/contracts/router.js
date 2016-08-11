define('contracts/router', ['exports', 'ember', 'contracts/config/environment'], function (exports, _ember, _contractsConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _contractsConfigEnvironment['default'].locationType
  });

  Router.map(function () {});

  exports['default'] = Router;
});