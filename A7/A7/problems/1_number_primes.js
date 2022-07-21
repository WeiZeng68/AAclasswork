/*******************************************************************************
Write a function numberPrimes(n) that takes in a number, `n`. The function should
return the number of prime numbers less than or equal to `n`. For example,
there are 4 prime numbers less that or equal to 10: 2, 3, 5, 7.

Examples:

numberPrimes(10); // => 4
numberPrimes(12); // => 5
numberPrimes(20); // => 8
numberPrimes(100); // => 25
*******************************************************************************/

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function numberPrimes(n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (isPrime(i)) {
      count++;
    }
  }
  return count; 
}

console.log(numberPrimes(10)); // => 4
console.log(numberPrimes(12)); // => 5
console.log(numberPrimes(20)); // => 8
console.log(numberPrimes(100)); // => 25

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = numberPrimes;
