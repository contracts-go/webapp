/**
 * @file Application wide actions
 * Created by fran on 8/16/16.
 */
import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
    /**
     * Store the current in every route.
     * @return {*|Promise|Promise.<T>}
     */
    beforeModel: function() {
        return this.get('session').fetch().catch(function() {
          // No user is signed in
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
         * @param {string} provider
         */
        signIn: function(provider) {
            // Todo: figure out if the user is a new user
            // If they are, make a new entry for them in the database by their uuid
            // If not, just log them in I guess?
            const route = this;
            this.get('session').open('firebase', {
                provider: provider
            }).then(function(data) {
                // console.log(data);
                // If the user is new (not found in our database), we need to create a new record for them in firebase
                route.store.findRecord('user', data.uid)
                  .then(function(user) {
                      Ember.Logger.log(user);
                      route.transitionTo('document');
                  })
                  .catch(function() {
                      // Not found in database
                      Ember.Logger.log(data.uid + ' not found in database. They must be new!');
                      // Get a reference to the Stevens Company (default for now)
                      route.store.findRecord('company', config.APP.defaultCompany)
                        .then(function(company) {
                            // Create a new user record with their id as the uid
                            const newUser = route.store.createRecord('user', {
                                id: data.uid, // Override the firebase-provisioned id
                                email: data.currentUser.email,
                                name: data.currentUser.displayName,
                                type: 'pi', // { pi, admin } . Will deal with admin later.
                                company: company, // For now should default to Stevens
                                documents: [],
                            });
                            // Save the user to firebase
                            return newUser.save();
                        })
                        .then(function(success) {
                          Ember.Logger.log(success);
                          // Transition to the dashboard once all done
                          route.transitionTo('document');
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
            });
        },
        /**
         * Sign the user out of the session.
         */
        signOut: function() {
            this.get('session').close();
        }
    }
});