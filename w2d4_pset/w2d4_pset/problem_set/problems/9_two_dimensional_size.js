/***********************************************************************
Write a function twoDimensionalSize(array) that takes in a 2D-array as
an argument. The function should return the total number of elements in
the 2D-array.
***********************************************************************/

function twoDimensionalSize(array) {
  let total = 0

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      total++
    }
  }
  return total;
}

var arr1 = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8, 9]
];

console.log(twoDimensionalSize(arr1)); // => 9

var arr2 = [
  ['a'],
  ['b', 'c', 'd', 'e']
];

console.log(twoDimensionalSize(arr2)); // => 5

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = twoDimensionalSize;
