import Ember from 'ember';
import config from '../config/environment';

/**
 * @see http://miguelcamba.com/blog/2015/06/18/how-to-inject-the-current-user-using-ember-simple-auth/
 * @param appInstance
 */
export function initialize(appInstance) {
  const service = Ember.ObjectProxy.create({ isServiceFactory: true });
  // Register the User factory
  appInstance.application.register('service:current-user', service, { instantiate: false, singleton: true });
  // Add to all routes, controllers, components
  appInstance.application.inject('route', 'currentUser', 'service:current-user');
  appInstance.application.inject('controller', 'currentUser', 'service:current-user');
  appInstance.application.inject('component', 'currentUser', 'service:current-user');
}

export default {
  name: 'current-user',
  initialize
};
