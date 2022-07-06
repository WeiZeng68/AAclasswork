/***********************************************************************
Write a function `abbreviate(sentence)` that takes in a sentence string
and returns a new sentence where words longer than 4 characters have
their vowels removed. Assume the sentence has all lowercase characters.
Feel free to use the array below in your solution:
***********************************************************************/
function removeVowels(word) {       //first we make a helper function to remove vowels
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let newStr = ' ';

    for (let i = 0; i < word.length; i++) {       //iterate the string
        let char = word[i];                   //store the string in variable char

    if (vowels.indexOf(char) === -1) {    //if the character is not a vowel
        newStr += char                     //then we add it our new string 
    }      
    }
    return newStr;
}


function abbreviate(sentence) {
    let words = sentence.split(' ');   //split sentence
    let newWords = [];               //array to store new sentence 

    for (let i = 0; i < words.length; i++) {
        let word = words[i];

        if (word.length > 4) {                       
            let newWord = removeVowels(word);    //call our removeVowel helper function
            newWords.push(newWord)              //push to newWords
        } else { 
            newWords.push(word);            //else we just push if its not longer than 4 
        }
    }
    return newWords.join(' ');
}

console.log(abbreviate('bootcamp prep is fun')); // => 'btcmp prep is fun'



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = abbreviate;
