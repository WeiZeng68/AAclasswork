/***********************************************************************
Write a function shiftChars(word, num) that takes in a lowercase string
and a number. The function should return a string where every character
of the word is shifted `num` times in the alphabet.

Use this alphabet array to help:

var alphabet = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m',
  'n','o','p','q','r','s','t','u','v','w','x','y','z'
];

Examples:

shiftChars('able', 1); // => 'bcmf'
shiftChars('apple', 2); //=> 'crrng'
shiftChars('bootcamp', 3); //=> 'errwfdps'
shiftChars('zebra', 5); //=> 'ejgwf'
***********************************************************************/
let alphabet = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m',
  'n','o','p','q','r','s','t','u','v','w','x','y','z'
];

function shiftChars(word, num) {
  let newWord = '';

  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    let oldIdx = alphabet.indexOf(char);
    let newIdx = oldIdx + num;
    newWord += alphabet[newIdx % alphabet.length]; 
  }
  return newWord; 
}

console.log(shiftChars('able', 1)); // => 'bcmf'
console.log(shiftChars('apple', 2)); //=> 'crrng'
console.log(shiftChars('bootcamp', 3)); //=> 'errwfdps'
console.log(shiftChars('zebra', 5)); //=> 'ejgwf'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = shiftChars;
