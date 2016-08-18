import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
      if(params.id){
        // Todo: Deal with not-found
        return this.get('store').findRecord('document', params.id);
      }

      // If this is not a specific document route, get the current user
      return { user: this.get('currentUser').fetch() };
  }
});
