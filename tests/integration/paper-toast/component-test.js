/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'paper-toast',
  'Integration: PaperToastComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#paper-toast}}
      //     template content
      //   {{/paper-toast}}
      // `);

      this.render(hbs`{{paper-toast}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
