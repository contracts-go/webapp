/**
 * @file Application wide actions
 * Created by fran on 8/16/16.
 */
import Ember from 'ember';
export default Ember.Route.extend({
    /**
     * Check to see if the user's session is present.
     * @return {*|Promise|Promise.<T>}
     */
    beforeModel: function() {
        return this.get('session').fetch().catch(function() {});
    },
    actions: {
        /**
         * If the user is not logged in, reroute them to the home page.
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
                route.transitionTo('dashboard');
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