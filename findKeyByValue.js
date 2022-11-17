const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 🛑 🛑  Assertion Failed: ${actual} !== ${expected}`);
  }

};

const findKeyByValue = function (object, value) {
  for (const key in object) {
    if (object[key] === value)
      return key;
  }
  return undefined
}

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
  Action: "Jumanji",
  Romantic: "NoteBook"
}


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Jumanji"), "Action");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse") , "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"),"comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "NoteBook"), "Romantic");

