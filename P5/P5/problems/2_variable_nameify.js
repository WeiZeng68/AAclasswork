/*******************************************************************************
Write a function variableNameify(words) that takes in an array of words. The function
should return a string representing the variable name obtained by combining the
words and captitalizing them in mixCased style.

Examples:

variableNameify(['is', 'prime']) => 'isPrime'
variableNameify(['remove', 'last', 'vowel']) => 'removeLastVowel'
variableNameify(['MaX', 'VALUE']) => 'maxValue'
*******************************************************************************/

function variableNameify(words) {
  let newWords = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    if (i === 0) {
      newWords.push(word.toLowerCase());
    } else {
      let firstChar = word[0].toUpperCase();
      let rest = word.slice(1).toLowerCase();
      newWords.push(firstChar + rest);
    }  
  }
  return newWords.join('');
}

console.log(variableNameify(['is', 'prime'])) //=> 'isPrime'
console.log(variableNameify(['remove', 'last', 'vowel'])) //=> 'removeLastVowel'
console.log(variableNameify(['MaX', 'VALUE'])) //=> 'maxValue'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = variableNameify;
