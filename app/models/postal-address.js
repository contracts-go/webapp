import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  addressCountry: DS.attr('string'),
  addressLocality: DS.attr('string'),
  addressRegion: DS.attr('string'),
  postOfficeBoxNumber: DS.attr('string'),
  postalCode: DS.attr('string'),
  streetAddress: DS.attr('string'),
  readable: Ember.computed('streetAddress', 'addressLocality', 'addressRegion', function() {
    return `${this.get('streetAddress')}, ${this.get('addressLocality')}, ${this.get('addressRegion')}`;
  })
});