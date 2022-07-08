/***********************************************************************
Write a function called capVowels(string) that takes in a string and
returns the string where every vowel is capitalized. All other letters
should be lowercased.
***********************************************************************/

function capVowels(string) {
    let vowels = 'aeiouAEIOU'.split('');
    let newStr = '';

    for (let i = 0; i < string.length; i++) {
    let char = string[i]
    if (vowels.indexOf(char) > -1) {
        newStr += char.toUpperCase();
    } else {
        newStr += char.toLowerCase();
    }
    }
    return newStr; 
}

console.log(capVowels('hello world')); // => 'hEllO wOrld'
console.log(capVowels('HELLO WORLD')); // => 'hEllO wOrld'
console.log(capVowels('boOtCamP PreP')); // => 'bOOtcAmp prEp'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = capVowels;
