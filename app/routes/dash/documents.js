import Ember from 'ember';

export default Ember.Route.extend({
  titleToken(model) {
    return model.get('title');
  },
  model(params) {
    const route = this;
    return this.get('store').findRecord('document', params.id)
      .catch((function() {
        // If the document is not found, redirect to the dash
        route.transitionTo('dash');
      }));
  }
});
