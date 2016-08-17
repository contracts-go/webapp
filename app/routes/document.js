import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
      if(params.id){
        return this.get('store').find('document', params.id);
      }
      return {};
  }
});
