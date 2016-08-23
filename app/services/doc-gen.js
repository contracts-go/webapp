import Ember from 'ember';
import config from '../config/environment';

export default Ember.Service.extend({
  ajax: Ember.inject.service(),
  /**
   * Patch the document with the new edited HTML
   * @param id
   * @param {{newText:string}}info
   * @return {*}
   */
  patch(info) {
    return this.get('ajax').patch(`${config.APP.baseApiURL}/document/${ info.id }`, {
      data: {
        user: info.userId,
        text: info.newText
      }
    });
  },
  /**
   *
   * @param id
   * @param info
   * @return {*}
   */
  getText(info) {
    return this.get('ajax').put(`${ config.APP.baseApiURL }/document/${ info.id }`, {
      data: { user: info.userId }
    });
  }
});
