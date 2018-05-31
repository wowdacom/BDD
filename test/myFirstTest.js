var expect = require('chai').expect
var uuid = require('node-uuid')
var assert = require('assert');
var _ = require('underscore');
var mockNumbers = [1, 5, 9, 13]
describe('Basic Mocha String Test', function () {
   it('checkout length of uuid', function () {
      var mockId = uuid()
      expect(mockId.length).to.equal(36);
   });
});

describe('Underscore Test', function () {
   it('checkout the out put _.min to the function', function () {
      var numbers = [1, 5, 9, 13]
      expect(_.min(mockNumbers)).to.equal(1);
   });
   it('checkout the out put _.each to the functon', function () {
      var newNumbers = []
      _.each(mockNumbers, (item)=>{ newNumbers.push(item*2) })
      expect(newNumbers).to.have.members([2, 10, 18, 26])
   });
   it('checkout the out put _.map and index to the functon', function () {
      expect(_.map(mockNumbers, function(item, index){ return item + index })).to.have.members([1, 6, 11, 16])
   });
   it('checkout the out put _.reduce to the functon', function () {
      expect(_.reduce(mockNumbers, function(memo, num){ return memo + num }, 10)).to.equal(38)
   });
   it('checkout the out put _.reduceRight to the functon', function () {
	   var newNumbers = [[1, 2], [3, 4], [5, 6]]
      expect(_.reduceRight(newNumbers, function(memo, num){ return memo.concat(num)})).to.include.ordered.members([5, 6, 3 ])
   });
   it('checkout the out put _.find to the functon', function () {
      expect(_.find(mockNumbers, function(num){ return num % 2 == 1})).to.equal(1)
	});
   });
