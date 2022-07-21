/*******************************************************************************
Write a function longestBigram(sentence) that takes in a sentence string and returns
the longest bigram in the sentence. A bigram is a pair of consecutive words.
When returning the bigram, include the space between the words.
Assume there will be no punctuation. In the case of a tie, return the earlier bigram.

Examples:

longestBigram('measure twice cut once'); // => 'measure twice'
longestBigram("One must have a mind of winter"); // => 'must have'
longestBigram("go home to eat"); // => 'go home'
longestBigram("his last assessment is fun"); // => 'last assessment'
*******************************************************************************/

function longestBigram(sentence) {
  let words = sentence.split(' ');
  let longestWord = ''

  for (let i = 0; i < words.length - 1; i++) {
    let word = words[i];
    let nextWord = words[i + 1]
    let bigRam = word + ' ' + nextWord;
    if (bigRam.length > longestWord.length) {
      longestWord = bigRam;
    }
  }
  return longestWord; 
}


console.log(longestBigram('measure twice cut once')); // => 'measure twice'
console.log(longestBigram("One must have a mind of winter")); // => 'must have'
console.log(longestBigram("go home to eat")); // => 'go home'
console.log(longestBigram("his last assessment is fun")); // => 'last assessment'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = longestBigram;
