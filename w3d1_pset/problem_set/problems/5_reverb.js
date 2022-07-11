/***********************************************************************
Write a function `reverb(word)` that takes in a word string and returns
the word with all characters after the last vowel repeated.

Examples:

reverb('running'); // => 'runninging'
reverb('wild'); // => 'wildild'
reverb('debugged'); // => 'debuggeded'
reverb('my'); // => 'my'
***********************************************************************/

function reverb(word) {
    let vowels = 'aeiou';

    for (let i = word.length - 1; i >= 0; i--) {
        let char = word[i]
        if (vowels.indexOf(char) > -1) {
            let afterWord = word.slice(i);
            return word + afterWord;
        }
    } return word; 
}

console.log(reverb('running')); // => 'runninging'
console.log(reverb('wild')); // => 'wildild'
console.log(reverb('debugged')); // => 'debuggeded'
console.log(reverb('my')); // => 'my'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = reverb;
