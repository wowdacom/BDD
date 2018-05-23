var expect = require('chai').expect
var uuid = require('node-uuid')
var assert = require('assert');

describe('Basic Mocha String Test', function () {
   it('checkout length of uuid', function () {
      var mockId = uuid()
      expect(mockId.length).to.equal(36);
   });
});
