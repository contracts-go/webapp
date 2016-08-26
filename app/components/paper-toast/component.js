import Ember from 'ember';

export default Ember.Component.extend({
  paperToast: Ember.inject.service('paper-toast'),
  source: Ember.computed.oneWay('paperToast'),
  classNames: ['md-toast'],
  classNameBindings: ['isShowing:md-toast-show:md-toast-hide'],
  isShowing: false,
  isGone: true,
  message: '',
  closeAfter: 3000,
  init() {
    this._super();
    // Bind the current component to the service
    this.get('source').setTarget(this);
  },
  showSimple(message) {
    this.show({ message });
  },
  /**
   *
   * @param {{[type]:string,[closeAfter]:number, message:string}}options
   */
  show(options) {
    const toast = this;
    const closeAfter = options.closeAfter || this.get('closeAfter');
    this.set('message', options.message);
    toast.set('isGone', false);
    this.set('isShowing', true);
    setTimeout(function() { toast.hide(250) }, closeAfter);
  },
  hide(removeAfter) {
    this.set('isShowing', false);
    const toast = this;
    setTimeout(function() { toast.set('isGone', true) }, removeAfter);
  }
});
