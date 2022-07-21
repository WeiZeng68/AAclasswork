/*******************************************************************************
Write a function primeFactors(n) that takes in a number, `n`. The function should
return an array containing all factors of `n` that are prime. A factor is a number
that divides another.

Examples:

primeFactors(10) => [ 2, 5 ]
primeFactors(24) => [ 2, 3 ]
primeFactors(30) => [ 2, 3, 5 ]
primeFactors(11) => [11]
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

function primeFactors(n) {
  let primes = [];

  for (let i = 0; i <= n; i++) {
    if (isPrime(i) && n % i === 0) {
      primes.push(i);
    }
  }
  return primes; 
}

console.log(primeFactors(10)) //=> [ 2, 5 ]
console.log(primeFactors(24)) //=> [ 2, 3 ]
console.log(primeFactors(30)) //=> [ 2, 3, 5 ]
console.log(primeFactors(11)) //=> [11]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = primeFactors;
