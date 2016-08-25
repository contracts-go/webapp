import FirebaseSerializer from 'emberfire/serializers/firebase';

export default FirebaseSerializer.extend({
  attrs: {
    project: { embedded: 'always' },
    company: { embedded: 'always' } // Will embed company for now until we sign em up in next version
  }
});