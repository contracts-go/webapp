define('contracts/tests/test-helper', ['exports', 'contracts/tests/helpers/resolver', 'ember-qunit'], function (exports, _contractsTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_contractsTestsHelpersResolver['default']);
});