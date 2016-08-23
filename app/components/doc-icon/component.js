import Ember from 'ember';

export default Ember.Component.extend({
  routing: Ember.inject.service('-routing'),
  mailer: Ember.inject.service('mailer'),
  clickable: 'true',
  classNameBindings: ['isSelected', 'show'],
  showPromptDialog: false,
  show: false,
  actions: {
    openPromptDialog(){
      this.set('showPromptDialog', true);
    },
    closePromptDialog() {
      this.set('showPromptDialog', false);
    },
    sendMail(){
      var info = {
        sender:this.get('currentUser').get('id'),
        document: this.get('doc').get('id'),
        recipient: this.get('currentUser').get('id'),
        template: 'toSelf'
      }
      this.get('mailer').mail(info);
      this.set('showPromptDialog', false);

      this.set('show', true);
      setTimeout(function(){ this.set('show', false); }, 3000);
    },
  },
  mouseEnter(){
    this.set('isSelected', true)
  },
  mouseLeave(){
    this.set('isSelected', false)
  },
  /**
   * Todo: Permissions
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
