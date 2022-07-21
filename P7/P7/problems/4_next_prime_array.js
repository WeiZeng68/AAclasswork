/*******************************************************************************
Write a function nextPrimeArray(array) that takes in an array of numbers.
The function should return a new array where each prime number is replaced
with the prime number that come next sequentially. For example the prime number
that comes after 5 is 7.

Examples:

nextPrimeArray([-4, 2, 5, 4, 11]) => [ -4, 3, 7, 4, 13 ]
nextPrimeArray([9, 13, 5, 6]) => [ 9, 17, 7, 6 ]
nextPrimeArray([]) => []
*******************************************************************************/

function isPrime(n) {
  if (n < 2) {
    return false; 
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function nextPrime(n){
  for (let i = n + 1; true; i++) {
    if (isPrime(i)) {
      return i;
    }
  }
}

console.log(nextPrime())



function nextPrimeArray(array) {
  let newArr = [];

  for (let i = 0; i < array.length; i++) {
    let nums = array[i];
    if (isPrime(nums)) {
      newArr.push(nextPrime(nums))
    } else {
      newArr.push(nums)
    }
  }
  return newArr; 
}

console.log(nextPrimeArray([-4, 2, 5, 4, 11])) //=> [ -4, 3, 7, 4, 13 ]
console.log(nextPrimeArray([9, 13, 5, 6])) //=> [ 9, 17, 7, 6 ]
console.log(nextPrimeArray([])) //=> []

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = nextPrimeArray;
