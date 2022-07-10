/*******************************************************************************
Write a function hipsterfyWord(word) that takes takes in a string and returns
the string with the last vowel removed. 'y' is not a vowel.

Examples:

hipsterfyWord('proper') => 'propr'
hipsterfyWord('tonic') => 'tonc'
hipsterfyWord('PANTHER') => 'PANTHR'
hipsterfyWord('BACKWARDS') => 'BACKWRDS'
*******************************************************************************/


function hipsterfyWord(word) {
  let vowels = 'aeiouAEIOU';
  let str = '';

  for (let i = word.length - 1; i > 0 ; i--) {
    let char = word[i];
    
      if (vowels.indexOf(char) > -1) {  //if char is vowel
        let before = word.slice(0, i);
        let after = word.slice(i + 1);
        return before + after;
      }
  }
}

console.log(hipsterfyWord('proper')) //=> 'propr'
console.log(hipsterfyWord('tonic')) //=> 'tonc'
console.log(hipsterfyWord('PANTHER')) //=> 'PANTHR'
console.log(hipsterfyWord('BACKWARDS')) //=> 'BACKWRDS'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = hipsterfyWord;
