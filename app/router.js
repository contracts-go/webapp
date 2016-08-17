import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  /* Default page routes */
  // Splash page
  this.route('index', { path: '/' });
  // 404
  this.route('page-not-found', { path: '*wildcard' });

  /* Authenticated routes */
  // 'Portal' lolol
  this.authenticatedRoute('document');
  // Document Routes
  this.authenticatedRoute('document', { path: 'document/:id' }, function() {
    // Viewing should be the default mode of a document
    this.authenticatedRoute('view', { path: '/'});
    this.authenticatedRoute('view', { path: '*wildcard'});
    this.authenticatedRoute('edit', { path: 'edit'});
    this.authenticatedRoute('create', { path: 'create'});
  });
});

export default Router;
