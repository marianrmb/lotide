const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 🛑 🛑  Assertion Failed: ${actual} !== ${expected}`);
  }

};


const countLetters = function(sentence){
  const countNumber = [];
  for (const letter of sentence) {
      if (countNumber[letter]) {
        countNumber[letter] += 1;
      } else {
        countNumber[letter] = 1
      }
  }
  return countNumber;
}

console.log(countLetters("I am really hungry"))
