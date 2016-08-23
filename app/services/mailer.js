import Ember from 'ember';
import config from '../config/environment';

export default Ember.Service.extend({
  ajax: Ember.inject.service(),
  templates: {
    toSelf: 'toSelf',
    toCompany: 'toCompany',
    toAdmin: 'toAdmin'
  },
  /**
   *
   * @param {string} id
   * @param {{sender:string, document:string, recipient:string, template:string}} info
   * @return {*}
   */
  mail(id, info) {
    return this.get('ajax').post(`${config.APP.baseApiURL}/document/${id}/email`, {
      data: info
    });
  }
});
