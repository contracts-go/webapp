/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'doc-type-select-icon',
  'Integration: DocTypeSelectIconComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#doc-type-select-icon}}
      //     template content
      //   {{/doc-type-select-icon}}
      // `);

      this.render(hbs`{{doc-type-select-icon}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
