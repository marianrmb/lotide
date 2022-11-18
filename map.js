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

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}



const results1 = map(words, word => word[0]);
console.log("Item BEFORE: ", words);
console.log( "Item AFTER: ", results1);
