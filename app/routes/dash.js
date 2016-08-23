import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'Dashboard',
  actions: {
      targetButton() {
          alert('You pressed a target button. -from component');
      }
  }
});
