/*******************************************************************************
Write a function numsToWords(numString) that takes in a string representing a number.
The function should return a new string where each digit character is replaced with
it's "word" respresentation. Assume the input string only contains numeric characters.

Examples:

numsToWords('42') => 'FourTwo'
numsToWords('123') => 'OneTwoThree'
numsToWords('159598') => 'OneFiveNineFiveNineEight'
*******************************************************************************/

function numsToWords(numString) {
  var words = {
    0 : 'Zero',
    1 : 'One',
    2 : 'Two',
    3 : 'Three',
    4 : 'Four',
    5 : 'Five',
    6 : 'Six',
    7 : 'Seven',
    8 : 'Eight',
    9 : 'Nine',
  }
  let newStr = '';

  for (let i = 0; i < numString.length; i++) {
    let nums = numString[i];
    newStr += words[nums]
  }
  return newStr;
}

console.log(numsToWords('42')) //=> 'FourTwo'
console.log(numsToWords('123')) //=> 'OneTwoThree'
console.log(numsToWords('159598')) //=> 'OneFiveNineFiveNineEight'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = numsToWords;
