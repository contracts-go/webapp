/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'doc-icon',
  'Integration: DocIconComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#doc-icon}}
      //     template content
      //   {{/doc-icon}}
      // `);

      this.render(hbs`{{doc-icon}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
