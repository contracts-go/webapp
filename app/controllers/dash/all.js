import Ember from 'ember';

export default Ember.Controller.extend({
  dash: Ember.inject.controller('dash'),
  init() {
    const controller = this;
    const currentUser = this.get('currentUser');
    // Janky but can't get the currentUser.incompleteDocs to work
    // Won't resolve the promise though the filtering works
    // NOTE: these arrays are static and will not update
    const incompleteDocs = [];
    const pendingDocs = [];
    const completeDocs = [];
    currentUser.get('documents').then((docs) => {
      for (const doc of docs.toArray()) {
        switch(doc.get('status')) {
          case 'incomplete':
            incompleteDocs.push(doc);
            break;
          case 'pending':
            pendingDocs.push(doc);
            break;
          case 'complete':
            completeDocs.push(doc);
            break;
        }
      }
      controller.set('incompleteDocs', incompleteDocs);
      controller.set('pendingDocs', pendingDocs);
      controller.set('completeDocs', completeDocs);
    });
  }
});
