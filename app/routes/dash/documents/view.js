import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'View',
  setupController(controller, model){
    this._super(controller, model);
    // Bind the currentModel to the controller so we can access it there
    controller.set('currentModel', model);
  },
});
