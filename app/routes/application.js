/**
 * @file Application wide actions
 * Created by fran on 8/16/16.
 */
import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),
  title(tokens) {
    return tokens.join(' - ') + ' - Contracts-Go';
  },
    /**
     * Store the current in every route.
     * @return {*|Promise|Promise.<T>}
     */
    beforeModel: function() {
      const route = this;
      return route.get('session').fetch().catch(function() {
        // No user is signed in
      }).then(function() {
        // If there is a user signed in, populate the currentUser object
        if (route.get('session').content.isAuthenticated)
          return route._populateCurrentUser();
      });
    },
    actions: {
        /**
         * If the user is not logged in, reroute them to the home page.
         * Called by authorizedRoute when the user is unauthorized
         */
        accessDenied: function() {
          this.transitionTo('index')
        },
        /**
         * The default page for logged in users is their 'dashboard'
         * For now, if a PI signs in we will reroute them from there.
         *
         * If there is a new user logging in, create a database record for them.
         * Populate the current user service
         * @param {string} provider
         */
        signIn: function(provider) {
            // Todo: figure out if the user is a new user
            // If they are, make a new entry for them in the database by their uuid
            // If not, just log them in I guess?
            const route = this;
            let sessionData;
            this.get('session').open('firebase', {
                provider: provider
            }).then(function(data) {
                // Successfully signed in
                // If the user is new (not found in our database), we need to create a new record for them in firebase
                sessionData = data;
                // Fetch the current user and store it from the session
                return route._populateCurrentUser();
            }).then(function () {
                route.transitionTo('dash');
            })
              .catch(function(error) {
                Ember.Logger.log(error);
                // Not found in database
                Ember.Logger.log(sessionData.uid + ' not found in database. They must be new!');
                // Get a reference to the Stevens Company (default for now)
                route.store.findRecord('company', config.APP.defaultCompany)
                  .then(function(company) {
                      // Create a new user record with their id as the uid
                      const newUser = route.store.createRecord('user', {
                          id: sessionData.uid, // Override the firebase-provisioned id
                          email: sessionData.currentUser.email,
                          name: sessionData.currentUser.displayName,
                          type: 'pi', // { pi, admin } . Will deal with admin later.
                          company: company, // For now should default to Stevens
                          documents: []
                      });
                      // Save the user to firebase
                      return newUser.save();
                  })
                  .then(function(success) {
                    Ember.Logger.log(success);
                    // Transition to the dashboard once all done
                    route.transitionTo('dash');
                  })
                  .catch(function(error) {
                    let message;
                    switch(error.code) {
                      case 'PERMISSION_DENIED':
                        message = 'You must sign in with a Stevens account.';
                        break;
                      default:
                        Ember.Logger.error(error);
                        message = error;
                        break;
                    }
                    // Log this silly user out
                    route.get('session').close();
                    // Route to the index page with an error message
                    route.controllerFor('index').set('error', message);
                  });
              });
        },
        /**
         * Sign the user out of the session.
         */
        signOut: function() {
          this.get('session').close();
          this.transitionTo('index');
        }
    },

  /**
   * Populates the currentUser service with the user from the database
   * @param {string} id session id
   * @return {*}
   * @private
   */
  _populateCurrentUser() {
    Ember.Logger.info('Populating current user');
    const route = this;
    const id = this.get('session').content.uid;
    return this.get('store').findRecord('user', id)
      .then(function(user) {
        Ember.Logger.info('Populated!');
        route.get('currentUser').set('content', user)
      });
  }
});