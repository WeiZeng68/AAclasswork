//Write a function `firstLastCap(sentence)` that takes in a sentence and
//returns a new sentence where the first and last letters of each word is
//uppercase. All other characters should be lowercase.

function firstLastCap(sentence) {
    let words = sentence.split(' '); 
    let newWords = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let newWord = word.toLowerCase();
        let firstChar = newWord[0].toUpperCase();   //get first char to upper case
        let lastChar = newWord[newWord.length -1].toUpperCase();  //get last char to upper case
        newWord = firstChar + newWord.slice(1,-1) + lastChar;
        newWords.push(newWord);
    }
    let newSentence = newWords.join(' ');
    return newSentence;
}
console.log(firstLastCap('hello BOOTCAMP PrEp'));

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = firstLastCap;
