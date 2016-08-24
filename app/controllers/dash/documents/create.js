import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    /**
     * Validate then Save the current user and document
     */
    save() {
      this.get('currentUser').content.save();
      this.get('currentModel').save();
    },
    typeSelected(type) {
      console.log("hello");
      document.getElementById("doc_type").value = type;
    },
  }
});
