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

  // Document + Dash Routes
  this.authenticatedRoute('dash', function() {
    this.authenticatedRoute('all', { path: '/' });
    this.authenticatedRoute('all', { path: ':*wildcard'});

    this.authenticatedRoute('documents', { path: 'documents/:id' }, function() {
      // Viewing should be the default mode of a document when id provided
      this.authenticatedRoute('view', { path: ':*wildcard'});
      this.authenticatedRoute('view', { path: 'view'});
      this.authenticatedRoute('edit', { path: 'edit'});
      this.authenticatedRoute('create', { path: 'create'});
    });
  });
});

export default Router;
