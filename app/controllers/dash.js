import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    /**
     * Create a blank document in the database and then direct to the create form
     */
    newContract: function() {
      // Create the doc
      const controller = this;
      const store = this.get('store');
      // Create a new user record with their id as the uid
      const newDoc = store.createRecord('document', {
        status: 'incomplete',
        project: {},
        creator: this.get('currentUser').content,
      });
      // Save the user to firebase
      newDoc.save()
        .then(function() {
          // Saved the blank doc. Now add it to the current users documents
          return controller.get('currentUser').get('documents').pushObject(newDoc);
        })
        .then(function() {
          // Redirect to create form
          controller.transitionToRoute('dash.documents.create', newDoc.id)
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
});
