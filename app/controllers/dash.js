import Ember from 'ember';

export default Ember.Controller.extend({
  docFilter: 'all',
  actions: {
    setDocFilter(filter) {
      this.set('docFilter', filter);
    },
    /**
     * Create a blank document in the database and then direct to the create form
     */
    newContract() {
      // Create the doc
      const controller = this;
      const store = this.get('store');
      const currentUser = this.get('currentUser');
      let newDoc;
      // Create a new user record with their id as the uid
      return currentUser.get('incompleteDocs')
        .then((docs) => {
          newDoc = store.createRecord('document', {
            status: 'incomplete',
            project: {
              industry: '',
              description: ''
            },
            title: `Incomplete Document #${docs.length + 1}`,
            company: {
              location: {
                test: '',
              },
              contact: {
                name: '',
                email: '',
              }
            },
            creator: currentUser.content
          });
          // Save the user to firebase
          return newDoc.save();
        })
        .then(function() {
          // Saved the blank doc. Now add it to the current users documents
          currentUser.get('documents').pushObject(newDoc);
          // Save the current user to firebase as well
          return currentUser.content.save();
        })
        .then(function() {
          // Redirect to create form
          controller.transitionToRoute('dash.documents.create', newDoc.id)
        })
        .catch(function(error) {
          Ember.Logger.error(error);
        });
    }
  }
});
