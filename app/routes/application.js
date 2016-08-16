/**
 * Created by fran on 8/16/16.
 */
import Ember from 'ember';
export default Ember.Route.extend({
    beforeModel: function() {
        return this.get('session').fetch().catch(function() {
        });
    },
    actions: {
        signIn: function() {
            this.get('session').open('firebase', {
                provider: 'google'
            }).then(function(data) {
                console.log(data.currentUser);
            });
        },
        signOut: function() {
            this.get('session').close();
        }
    }
});