const eqArrays = require('./eqArrays');


const assertArraysEqual = function (a, b) {
  if (!eqArrays(a, b)) {
      console.log(`🛑 🛑 🛑  Assertion Failed:[${a}] !== [${b}]`);
  } else {
      console.log(`✅ ✅ ✅  Assertion Passed:[${a}] === [${b}]`);
  }
};

module.exports = assertArraysEqual;