import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    // Search the database for a document with the provided id
    // Todo: account for non-existant documents
    return this.get('store').find('document', params.id);
  }
});
