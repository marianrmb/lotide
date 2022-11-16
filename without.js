
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅   Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 🛑 🛑  Assertion Failed: ${actual} !== ${expected}`);
  }

};

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
    console.log(`🛑 🛑 🛑 Assertion Failed:[${a}] !== [${b}]`);
  } else {
    console.log(`✅ ✅ ✅   Assertion Passed:[${a}] === [${b}]`);
  }
};

const without = function (a1, exclude) {
  for (var a = 0; a < exclude.length; a++) {
    for (var b = 0; b < a1.length; b++) {
      if (a1[b] === exclude[a]) {
        a1.splice(b, 1);
      }
    }
  }
  return a1;
}

console.log(without(["hello", "world", "lighthouse"], ["lighthouse"]));