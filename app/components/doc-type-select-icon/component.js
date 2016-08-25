import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['isSelected:selected'],
  isSelected: Ember.computed('doc', 'selectOn', function() {
    return this.get('doc.type') === this.get('selectOn');
  })
});
