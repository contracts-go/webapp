import Ember from 'ember';
import config from '../../../config/environment';

export default Ember.Controller.extend({
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
