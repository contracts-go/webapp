import Ember from 'ember';
import config from '../config/environment';

export function initialize(appInstance) {
  // appInstance.inject('route', 'foo', 'service:foo');
  //console.log(appInstance);
  // Get the session
  const User = Ember.Object.extend({
    fetch() {
      // Fetch the session info
      const session = appInstance.lookup(`service:${config.torii.sessionServiceName}`);
      // Lookup the store service and return a model with the current user's id
      return appInstance.lookup('service:store').findRecord('user', session.content.uid);
    }
  });
  // Register the User factory
  appInstance.application.register('user:currentUser', User);
  // Add to all routes
  appInstance.application.inject('route', 'currentUser', 'user:currentUser');
}

export default {
  name: 'current-user',
  initialize
};
