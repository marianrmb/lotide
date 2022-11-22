const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');
const middle = require('../middle');


console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]));
console.log(assertArraysEqual(middle([2, 3, 4]), [5]));
console.log(assertArraysEqual(middle([2, 2, 4]), [2]));
