import FirebaseSerializer from 'emberfire/serializers/firebase';

export default FirebaseSerializer.extend({
  attrs: {
    location: { embedded: 'always' }
  }
});
