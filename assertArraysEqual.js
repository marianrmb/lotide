const eqArrays = function (array1, array2) {
  if (array1.length === array2.length) {
    for (var i = 0; i < array2.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  }
  else {
    return false;
  }
  return true;


}

const assertArraysEqual = function (a, b) {
  if (eqArrays(a, b)) {
      console.log(`🛑 🛑 🛑  Assertion Failed:[${a}] !== [${b}]`);
  } else {
      console.log(`✅ ✅ ✅  Assertion Passed:[${a}] === [${b}]`);
  }
};

// // TEST CODE
// assertEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]), true); // => should PASS
// assertEqual(assertArraysEqual([1, 2, 3], [3, 2, 1]), false); // => false
// assertEqual(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]), true);// => true)
// assertEqual(assertArraysEqual(["1", "2", "3"], ["1", "2", 3]), false); // => false