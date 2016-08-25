import Ember from 'ember';

export default Ember.Controller.extend({
  mailer: Ember.inject.service(),
  showSendToAdminDialog: false,
  actions: {
    /**
     * Redirect back to the create page
     */
    makeChanges() {
      this.transitionToRoute('dash.documents.create', this.get('currentModel.id'));
    },
    openSendToAdminDialog() {
      this.set('showSendToAdminDialog', true);
    },
    closeSendToAdminDialog(action) {
      switch(action) {
        case 'cancel':
          this.set('showSendToAdminDialog', false);
          break;
        case 'confirm': {
          // Send to admin using the mailer
          const controller = this;
          const doc = this.get('currentModel');
          const admin = this.get('currentModel.admin');
          // Add document to admin's docs
          admin.get('documents').pushObject(doc);
          admin.content.save().then(() => {
            doc.set('status', 'pending');
            return doc.save();
          })
            .then(() => {
              const info = {
                sender: controller.get('currentUser.id'),
                document: doc.get('id'),
                recipient: admin.get('id'),
                template: 'toAdmin'
              };
              controller.get('mailer').mail(info);
              controller.set('showSendToAdminDialog', false);
            });
          break;
        }
      }
    }
  }
});
