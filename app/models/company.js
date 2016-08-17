import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  type: DS.attr('string'),
  state: DS.attr('string'),
  location: DS.belongsTo('postal-address', { async: false }),
  users: DS.hasMany('user')
});
