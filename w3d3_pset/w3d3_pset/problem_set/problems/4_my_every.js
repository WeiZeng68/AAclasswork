/***********************************************************************
Write a function `myEvery(arr, cb)` that takes in an array and a
callback. The function should call the cb for every element of the array.
The function should return true only if the callback returns true when
passed in every the element of the array. The function should return
false otherwise.

Examples:

function isEven(num) {
  return num % 2 === 0;
}

myEvery([10, 4, 8, 20], isEven); // => true
myEvery([2, 2, 10, 11, 12], isEven); // => false
***********************************************************************/

function myEvery(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    let ele = arr[i];
    if (cb(ele) === false) {
      return false;
    }
  }
  return true; 
}

function isEven(num) {
  return num % 2 === 0;
}

console.log(myEvery([10, 4, 8, 20], isEven)); // => true
console.log(myEvery([2, 2, 10, 11, 12], isEven)); // => false

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = myEvery;
