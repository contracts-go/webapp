import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  type: DS.attr('string'),
  date: DS.attr('date'),
  project: DS.attr(), // Will be embedded. { industry, description }
  patchFile: DS.attr('string'),
  templateFile: DS.attr('string'),
  status: DS.attr('string'),
  creator: DS.belongsTo('user'),
  admin: DS.belongsTo('user'),
  companyContact: DS.belongsTo('user'),
  createdAt: DS.attr('date')
});
