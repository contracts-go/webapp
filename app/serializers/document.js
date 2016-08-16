import FirebaseSerializer from 'emberfire/serializers/firebase';

export default FirebaseSerializer.extend({
  attrs: {
    project: { embedded: 'always' }
  }
});