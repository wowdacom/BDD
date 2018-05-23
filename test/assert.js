var assert = require('chai').assert
var expect = require('chai').expect
var sinon = require('sinon')
var moduleCalc = require('./calculate')

describe('AssertTest', function() {
  var foo = 'Hello';
  var bar = 'World';

  it('should be equal', function() {
    assert(foo === bar, 'foo is not bar');
  });

  it('should be equal', function() {
    expect(3).have.to.equal(2);
  })
});

describe('Test function add', () => {
  it('1 + 2 = 3', ( )=>{
    expect(moduleCalc.add(1, 2)).to.equal(3);
  })
  it('3 - 2 = 1', ( )=>{
    expect(moduleCalc.sub(3, 2)).to.equal(1);
  })
});

describe('Test compare two names', function(){
  it('should call the callback function', function() {
    var callback = sinon.fake();
    var proxy = once(callback);

    proxy();
    proxy();

    assert(callback.calledOnce);
    console.log(callback.calledOnce)
  
  })
})

function once(fn) {
    var returnValue, called = false;
    return function () {
        if (!called) {
            called = true;
            returnValue = fn.apply(this, arguments);
        }
        return returnValue;
    };
}
