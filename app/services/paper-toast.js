import Ember from 'ember';

function aliasToShow(type) {
  return function(message, options) {
    options = options || {};
    options.type = type;
    options.message = message;
    return this.show(options);
  };
}

export default Ember.Service.extend({
  success: aliasToShow('success'),
  error: aliasToShow('error'),
  setTarget(target) {
    this.set('target', target);
  },
  showSimple(message) {
    this.show({ message })
  },
  show(options) {
    this.get('target').show(options);
  }
});
