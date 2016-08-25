/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'nav-option',
  'Integration: NavOptionComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#nav-option}}
      //     template content
      //   {{/nav-option}}
      // `);

      this.render(hbs`{{nav-option}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
