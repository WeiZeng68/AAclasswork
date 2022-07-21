/***********************************************************************
Write a function `reverseHipsterfy(sentence)` that takes in a sentence
and removes all vowels, except the last vowels of every word.

Examples:

reverseHipsterfy("proper"); // => 'prper'
reverseHipsterfy("proper tonic panther"); // => 'prper tnic pnther'
reverseHipsterfy("bootcamp prep"); // => 'btcamp prep'
reverseHipsterfy("towel flicker banana"); // => 'twel flcker bnna'
reverseHipsterfy("runner anaconda"); // => 'rnner ncnda'
reverseHipsterfy("turtle cheeseburger fries"); // => 'trtle chsbrger fres'
***********************************************************************/
function indexOfLastVowel(word) {
    let vowels = 'aeiouAEIOU';

    for (let i = word.length - 1; i >= 0; i--) {
        let char = word[i];
        if (vowels.indexOf(char) > -1) {
            return i;
        }
    }
}

function reverseHipWord(word) {
    let newWord = '';
    let vowels = 'aeiou';
    let lastVowelIdx = indexOfLastVowel(word);

    for (let i = 0; i < word.length; i++) {
        let char = word[i]
        if (vowels.indexOf(char) === -1 || i === lastVowelIdx) { //if character is not a vowel
            newWord += char;                 //or the position of last vowel 
        }
    }
    return newWord; 
}

function reverseHipsterfy(sentence) {
    let words = sentence.split(' ');
    let newWords = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let newWord = reverseHipWord(word);
        newWords.push(newWord)
    }
    
    return newWords.join(' '); 
} 

console.log(reverseHipsterfy("proper")); // => 'prper'
console.log(reverseHipsterfy("proper tonic panther")); // => 'prper tnic pnther'
console.log(reverseHipsterfy("bootcamp prep")); // => 'btcamp prep'
console.log(reverseHipsterfy("towel flicker banana")); // => 'twel flcker bnna'
console.log(reverseHipsterfy("runner anaconda")); // => 'rnner ncnda'
console.log(reverseHipsterfy("turtle cheeseburger fries")); // => 'trtle chsbrger fres'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = reverseHipsterfy;
