import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    // Todo: Deal with not-found
    const route = this;
    return this.get('store').findRecord('document', params.id)
      .catch((function() {
        // If the document is not found, redirect to the dash
        route.transitionTo('dash');
      }));
  }
});
