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
   * @param info
   * @return {*}
   */
  mail(info) {
    return this.get('ajax').post(`${config.baseApiURL}/email`, info);
  }
});
