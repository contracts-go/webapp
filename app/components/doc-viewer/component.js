import Ember from 'ember';

export default Ember.Component.extend({
  docGen: Ember.inject.service(),
  ajax: Ember.inject.service(),
  isLoaded: false,
  docText: '',
  /**
   * Get the doc text from the api
   */
  init() {
    this._super(...arguments);
    const comp = this;
    comp.get('docGen').getText({
      id: comp.get('doc').get('id'),
      userId: comp.get('currentUser').get('id')
    })
      .then((res) => {
        Ember.Logger.info(res);
        comp.set('isLoaded', true);
        comp.set('docText', res.text);
      })
      .catch((error) => {
        Ember.Logger.error(error);
      })
  }
});
