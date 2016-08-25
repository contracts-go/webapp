import Ember from 'ember';

export default Ember.Component.extend({
  clickable: 'true',
  isSelected: false,
  // classNameBindings: ['isSelected'],
  click() {
    this.set('isSelected', true);
    this.get('onClick')();
  }
});
