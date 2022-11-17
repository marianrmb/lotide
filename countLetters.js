const assertEqual = function(actual, expected) {
  if (actual === expected){
      console.log(`These two are the same: ${actual} vs ${expected}`)
  } else {
      console.log(`These two are not the same: ${actual} vs ${expected}`);
  }

};

const countLetters = function(sentence){
  const countNum = [];
  for (const letter of sentence) {
      if (countNum[letter]) {
          countNum[letter] += 1;
      } else {
          countNum[letter] = 1
      }
  }
  return countNum;
}

console.log(countLetters("I am really hungry"))