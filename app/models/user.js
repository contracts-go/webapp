import Ember from 'ember';
import DS from 'ember-data';

function filterDocsByStatus(docs, status) {
  const filteredList = docs.filterBy('status', status);
  Ember.Logger.log(filteredList.length + ' ' + status);
  return Ember.RSVP.resolve(filteredList);
}

export default DS.Model.extend({
  email: DS.attr('string'),
  name: DS.attr('string'),
  type: DS.attr('string'),
  company: DS.belongsTo('company', { inverse: null }),
  documents: DS.hasMany('document', { inverse: null }),
  title: DS.attr('string', {
    defaultValue() { return ''; }
  }),
  pendingDocs: Ember.computed('documents', function() {
    return this.get('documents').then((docs) => { return filterDocsByStatus(docs, 'pending') });
  }),
  completeDocs: Ember.computed('documents', function() {
    return this.get('documents').then((docs) => { return filterDocsByStatus(docs, 'complete') });
  }),
  incompleteDocs: Ember.computed('documents', function() {
    return this.get('documents').then((docs) => { return filterDocsByStatus(docs, 'incomplete') });
  }),
  ready() {
    // Default to an empty array
    if (!this.get('documents')) {
      this.set('documents', []);
    }
  }
});
