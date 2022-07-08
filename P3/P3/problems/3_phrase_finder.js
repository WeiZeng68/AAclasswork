/*******************************************************************************
Write a function phraseFinder(words, phrase), that takes in an array of words and a
string representing a phrase. The function should return true if the phrase can be
formed by a pair of words from the array. The function should return false if the
phrase cannot be formed by any pair of words.

Examples:

phraseFinder(['world', 'prep', 'hello', 'bootcamp'], 'bootcamp prep') => true
phraseFinder(['world', 'bootcamp', 'hello', 'prep'], 'bootcamp prep') => true
phraseFinder(['world', 'bootcamp', 'hello', 'prep'], 'hello world') => true
phraseFinder(['world', 'bootcamp', 'hello', 'prep'], 'hello prep') => true
phraseFinder(['world', 'bootcamp', 'hello', 'prep'], 'hello goodbye') => false
*******************************************************************************/

function phraseFinder(words, phrase){

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
    let chars1 = words[i];
    let chars2 = words[j];
    let phrase1 = chars1 + ' ' + chars2;
    if (phrase1 === phrase) {
      return true;
      }
    }
  }
  return false; 
}

console.log(phraseFinder(['world', 'prep', 'hello', 'bootcamp'], 'bootcamp prep')) //=> true
console.log(phraseFinder(['world', 'bootcamp', 'hello', 'prep'], 'bootcamp prep')) //=> true
console.log(phraseFinder(['world', 'bootcamp', 'hello', 'prep'], 'hello world')) //=> true
console.log(phraseFinder(['world', 'bootcamp', 'hello', 'prep'], 'hello prep')) //=> true
console.log(phraseFinder(['world', 'bootcamp', 'hello', 'prep'], 'hello goodbye')) //=> false

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = phraseFinder;
