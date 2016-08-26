import Ember from 'ember';

export default Ember.Component.extend({
  routing: Ember.inject.service('-routing'),
  mailer: Ember.inject.service(),
  paperToast: Ember.inject.service('paper-toast'),
  clickable: 'true',
  classNameBindings: ['isSelected', 'show'],
  showPromptDialog: false,
  actions: {
    openPromptDialog(){
      this.set('showPromptDialog', true);
    },
    closePromptDialog() {
      this.set('showPromptDialog', false);
    },
    sendMail() {
      const info = {
        sender: this.get('currentUser.id'),
        document: this.get('doc.id'),
        recipient: this.get('currentUser.id'),
        template: 'toSelf'
      };
      const toast = this.get('paperToast');
      this.get('mailer').mail(info).then(() => {
        toast.success('Document sent.')
      });
      this.set('showPromptDialog', false);
    },
  },
  mouseEnter() {
    this.set('isSelected', true);
  },
  mouseLeave() {
    this.set('isSelected', false);
  },
  /**
   * @return {boolean}
   */
  doubleClick() {
    const doc = this.get('doc');
    // Determine the action the current user needs to/can perform on the doc
    let route;
    switch (doc.get('status')) {
      case 'incomplete':
        route = 'dash.documents.create';
        break;
      case 'pending':
        route = 'dash.documents.edit';
        break;
      case 'complete':
        route = 'dash.documents.view';
        break;
      default:
        // SHOULD NEVER HAPPEN
        throw new Error('Document does not have correct status!');
    }

    // Since the routing API is still private, it handles arguments differently
    // @see https://github.com/emberjs/ember.js/issues/12719
    this.get('routing').transitionTo(route, [doc.id]);
    // No bubbles
    return false;
  }
});
