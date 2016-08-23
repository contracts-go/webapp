import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        targetButton() {
            alert('You pressed a target button. -from component');
        }
    }
});
