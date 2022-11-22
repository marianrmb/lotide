// const assertArraysEqual = require('../assertArraysEqual');
// const eqArrays = require('../eqArrays');



// console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]));
// console.log(assertArraysEqual(middle([2, 3, 4]), [5]));
// console.log(assertArraysEqual(middle([2, 2, 4]), [2]));

const assert = require('chai').assert;
const middle   = require('../middle');

describe("middle", () => {
  it("returns 2 for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns 15 for ['5, 10, 15, 20, 25']", () => {
    assert.deepEqual(middle([5, 10, 15, 20, 25]), [15]); 
  });
});