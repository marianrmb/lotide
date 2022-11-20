const assertEqual = function(actual, expected) {

  if (actual === expected) {
     console.log(`✅✅✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
   } else if (actual !== expected) {
     console.log(`🛑🛑🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }
 };





findKey = function( obj, callback){
  
  let theObjectAsAnArray = Object.entries(obj)
  for (let item of theObjectAsAnArray){
    if (callback(item[1])){
 return item[0]
    }
  
  }
 } 
 console.log(findKey({
   "Blue Hill": { stars: 1 },
   "Akaleri":   { stars: 3 },
   "noma":      { stars: 2 },
   "elBulli":   { stars: 3 },
   "Ora":       { stars: 2 },
   "Akelarre":  { stars: 3 }
 }, x => x.stars === 2)
 )