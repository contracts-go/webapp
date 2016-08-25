import Ember from 'ember';

export default Ember.Controller.extend({
  mailer: Ember.inject.service(),
  showSendToAdminDialog: false,
  actions: {
    openSendToAdminDialog() {
      this.set('showSendToAdminDialog', true);
    },
    closeSendToAdminDialog(action) {
      switch(action) {
        case 'cancel':
          break;
        case 'confirm':
          // Send to admin
          break;
      }
    }
  }
});
