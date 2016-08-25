import Ember from 'ember';
import config from '../../../config/environment';

const { computed } = Ember;

export default Ember.Controller.extend({
    userState: '',
    states: computed(function() {
        return 'AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI WY'
            .split(' ').map((state) => ({ abbrev: state }));
    }),
    emailValidation: [{
        message: 'Please provide a valid email.',
        validate: (inputValue) => {
            let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            return emailPattern.test(inputValue);
        }
    }],
    zipValidation: [{
        message: 'Please provide a valid zip code.',
        validate: (inputValue) => {
            let zipPattern = /^\d{5}$/;
            return zipPattern.test(inputValue);
        }
    }],
    actions: {
    /**
     * Validate then Save the current user and document
     */
    save() {
      this.get('currentUser').content.save();
      this.get('currentModel').save();
    },
    /**
     * Add the admin, set a better title, save and then -->
     *  Send to viewing
     */
    done() {
      const controller = this;
      const model = this.get('currentModel');
      const newTitle = `${model.get('company.name')}-${model.get('type')}-${model.get('createdAt').toDateString()}`;

      // Must get a reference to the admin object from the database to link it
      controller.get('store').findRecord('user', config.APP.defaultAdmin)
        .then((admin) => {
          model.set('admin', admin);
          model.set('title', newTitle);
          model.save().then(() => {
            controller.transitionToRoute('dash.documents.view', model.get('id'))
          });
        });
    },
    /**
     * Set the model type and save it
     * @param type
     */
    typeSelected(type) {
      const model = this.get('currentModel');
      model.set('type', type);
      // In the future will allow for more file templates
      model.set('templateFile', `stevens-${type}.hbs`);
      model.save();
      // model.notifyPropertyChange('type'); trying to notify the selected type
    },
  }
});
