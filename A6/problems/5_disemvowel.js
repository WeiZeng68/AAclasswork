/*******************************************************************************
Write a function disemvowel(string) that takes in a string and returns the
string with all vowels removed.

Examples:

disemvowel('bootcamp'); // => 'btcmp'
disemvowel('PREP'); // => 'PRP'
disemvowel('hello world'); // => 'hll wrld'
*******************************************************************************/
function removeVowels(word) {
  let vowels = 'aeiouAEIOU';
  let newWord = '';

  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    if (vowels.indexOf(char) === -1) {
      newWord += char
    }
  }
  return newWord;
}

function disemvowel(string) {
  let newStr = '';

  for (let i = 0; i < string.length; i++) {
    let words = string[i];
    let newWord = removeVowels(words);
    newStr += newWord
  }
  return newStr; 
}

// console.log(disemvowel('bootcamp')); // => 'btcmp'
// console.log(disemvowel('PREP')); // => 'PRP'
// console.log(disemvowel('hello world')); // => 'hll wrld'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = disemvowel;
