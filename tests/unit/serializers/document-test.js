import { expect } from 'chai';
import { describeModel, it } from 'ember-mocha';

describeModel(
  'document',
  'Unit | Serializer | document',
  {
    // Specify the other units that are required for this test.
    needs: ['serializer:document', 'model:user']
  },
  function() {
    // Replace this with your real tests.
    it('serializes records', function() {
      let record = this.subject();

      let serializedRecord = record.serialize();

      expect(serializedRecord).to.be.ok;
    });
  }
);
