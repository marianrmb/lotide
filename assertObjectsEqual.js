const eqObjects = function (obj1, obj2) {
  let length1 = Object.keys(obj1).length
  let length2 = Object.keys(obj2).length
  let keyFirst = Object.keys(obj1)
  if (length1 !== length2) {
    return false
  }
  for (const keys of keyFirst) {
    if (Array.isArray(obj1[keys]) && Array.isArray(obj2[keys])) {
      if (!eqArrays(obj1[keys], (obj2[keys]))) {
        return false;
      }
    } else if (obj1[keys] !== obj2[keys]) {
      return false
    }

    return true
  }
};


const assertObjectsEqual = function (actual, expected) {
  //Implement me!
  const inspect = require('util').inspect; //<= add this line// ...
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑 🛑 🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`)
  }


};
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };



assertObjectsEqual(eqObjects(ab, ba), true)