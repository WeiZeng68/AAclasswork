/***********************************************************************
Write a function `twoDimensionalTotal(array)` that takes in a 2D array
of numbers and returns the total sum of all elements.


twoDimensionalTotal(arr2); // => 15
***********************************************************************/

function twoDimensionalTotal(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) { //iterates through the multidimensional array
      sum += array[i][j];
    }
  }
  return sum;
}

var arr1 = [
  [5, 2, 5, 3],
  [12, 13],
];

console.log(twoDimensionalTotal(arr1)); // => 40

var arr2 = [
  [2],
  [1, 9],
  [1, 1, 1]
]

console.log(twoDimensionalTotal(arr2)); // => 15

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = twoDimensionalTotal;
