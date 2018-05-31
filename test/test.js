var expect = require('chai').expect
var uuid = require('node-uuid')
var assert = require('assert');
var _ = require('underscore');
var mockNumbers = [1, 5, 9, 13]

_.each(mockNumbers, (item)=>{
  item = item*2
})
