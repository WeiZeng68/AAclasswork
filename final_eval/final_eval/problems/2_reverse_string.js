/**************************************************************************************
Write a function `reverseString(str)` that takes in a string and returns the given string
with its characters in reverse order.

Examples:

reverseString('taco');        // => 'ocat'
reverseString('hello world'); // => 'dlrow olleh'

Difficulty: Easy
*************************************************************************************/

function reverseString(str) {
    let newWord = '';

    for (let i = str.length - 1; i >= 0; i--) {
        let word = str[i]
        newWord += word;
    }
    return newWord;
}

console.log(reverseString('taco'));        // => 'ocat'
console.log(reverseString('hello world')); // => 'dlrow olleh'

/******************** DO NOT MODIFY ANYTHING UNDER THIS LINE *************************/

module.exports = reverseString;
