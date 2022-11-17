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

const middle = function(array){
  let middleElement = [];
  if (array.length < 3) {
    return [];
  }
  if (array.length % 2 !== 0 ){
    middleElement.push(array[Math.floor(array.length/ 2)]);
    return middleElement;
    }
    middleElement.push(array[Math.floor(array.length / 2 -1 )]);
    middleElement.push(array[Math.floor(array.length / 2)]);
    return middleElement;

  };

console.log(assertArraysEqual(middle([1, 2, 3, 4]), [5,6,7,8]));
console.log(assertArraysEqual(middle([2, 3, 4]), [5, 6,7]));
