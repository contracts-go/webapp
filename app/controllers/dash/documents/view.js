import Ember from 'ember';

export default Ember.Controller.extend({
  mailer: Ember.inject.service(),
  showSendToAdminDialog: false,
  actions: {
    /**
     * Redirect back to the create page
     */
    makeChanges() {
      this.transitionToRoute('dash.documents.create', this.get('model.id'));
    },
    openSendToAdminDialog() {
      this.set('showSendToAdminDialog', true);
    },
    closeSendToAdminDialog(action) {
      switch(action) {
        case 'cancel':
          this.set('showSendToAdminDialog', false);
          break;
        case 'confirm':
          // Send to admin using the mailer
          this.set('showSendToAdminDialog', false);
          break;
      }
    }
  }
});
