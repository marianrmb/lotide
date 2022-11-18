const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 🛑 🛑  Assertion Failed: ${actual} !== ${expected}`);
  }

};

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


const ab = { a: "1", b: "2"};
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] }

console.log(eqObjects(ab, ba));
assertEqual(eqObjects(ab, ba), true); // => true
assertEqual(eqObjects(ab, abc), false); // => false 
console.log(eqObjects(cd, dc));
console.log(eqObjects(cd, cd2));

