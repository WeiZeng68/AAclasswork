/******************************************************************************
Write a function reverseSentence(sentence) that returns a string where all the
words in the input sentence are reversed. Don't use Array#reverse.

Examples:

reverseSentence("Go to the store") => "store the to Go"
reverseSentence("Jump, jump for joy") => "joy for jump Jump,"
*******************************************************************************/

function reverseSentence(sentence) {
  let words = sentence.split(' ');
  let newSentence = [];

  for (let i = words.length - 1; i >= 0; i--) {
    let word = words[i];
    newSentence.push(word);
  }
  return newSentence.join(' '); 
}

console.log(reverseSentence("Go to the store")) //=> "store the to Go"
console.log(reverseSentence("Jump, jump for joy")) //=> "joy for jump Jump,"console.log(

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = reverseSentence;
