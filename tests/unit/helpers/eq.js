/* jshint expr:true */
import { expect } from 'chai';
import {
  describe,
  it
} from 'mocha';
import {
  ifString
} from 'contracts/helpers/if-string';

describe('IfStringHelper', function() {
  // Replace this with your real tests.
  it('works', function() {
    let result = ifString(42);
    expect(result).to.be.ok;
  });
});
