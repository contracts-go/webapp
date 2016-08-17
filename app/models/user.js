import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  name: DS.attr('string'),
  type: DS.attr('string'),
  company: DS.belongsTo('company', { inverse: null }),
  documents: DS.hasMany('document', { inverse: null }),
  title: DS.attr('string', {
    defaultValue() { return ''; }
  })
});
