/* jshint expr:true */
import { expect } from 'chai';
import {
  describe,
  it
} from 'mocha';
import Ember from 'ember';
import ClickOutsideMixin from 'contracts/mixins/click-outside';

describe('ClickOutsideMixin', function() {
  // Replace this with your real tests.
  it('works', function() {
    let ClickOutsideObject = Ember.Object.extend(ClickOutsideMixin);
    let subject = ClickOutsideObject.create();
    expect(subject).to.be.ok;
  });
});
