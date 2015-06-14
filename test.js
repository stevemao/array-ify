'use strict';
var equal = require('assert').deepEqual;
var arrayify = require('./');

it('should convert a non-array value into an array', function() {
  equal(arrayify('foo'), ['foo']);
});

it('should do nothing to an array', function() {
  equal(arrayify(['foo']), ['foo']);
});

it('should work with `null`', function() {
  equal(arrayify(null), [null]);
});

it('should work with `[null]`', function() {
  equal(arrayify([null]), [null]);
});

it('should work with `undefined`', function() {
  equal(arrayify(undefined), [undefined]);
});

it('should work with `[undefined]`', function() {
  equal(arrayify([undefined]), [undefined]);
});
