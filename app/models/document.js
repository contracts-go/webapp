import Ember from 'ember';
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
  company: DS.attr(),
  createdAt: DS.attr('date', {
    defaultValue() { return new Date() }
  }),
  isIncomplete: Ember.computed.equal('status', 'incomplete'),
  isMutual: Ember.computed.equal('type', 'mutual'),
  isReceiving: Ember.computed.equal('type', 'receiving'),
  isDisclosing: Ember.computed.equal('type', 'disclosing')
});
