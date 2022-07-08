// Define a function `logBetween(lowNum, highNum)` that will print every number
// from `lowNum` to `highNum`, inclusive. Inclusive means that the range includes
// `lowNum` and `highNum`. Hint: this function only needs to print using `console.log`,
// it does not need to return.
// function logBetween(lowNum, highNum) {
//     for (i = lowNum; i <= highNum; i += 1) {
//         console.log(i)
//     }
// }   
// console.log(logBetween(-1, 2));


// Write a function `logBetweenStepper(min, max, step)` that takes in 3 numbers as
// parameters. The function should print out numbers between `min` and `max` at `step`
// intervals.
// function logBetweenStepper(min, max, step) {
//     for (i = min; i < max; i += step) {
//         console.log(i)
//     }
// }
// console.log(logBetweenStepper(10,20,1));

// Write a function `printFives(max)` that prints out the multiples of 5 that are
// less than max.
// function printFives(max) {
//     for (i = 0; i < max; i += 5) {
//         if (i % 5 === 0) {
//             console.log(i)
//         }
//     }
// }
// console.log(printFives(20));

// function printFives(max) {
//     for (i = 0; i < max; i += 5) {
//         console.log(i)
//     }
// }
// console.log(printFives(20));

// Write a function `printReverse(min, max)` that print out all numbers from max
// to min (exclusive), in reverse order.
// function printReverse(min, max) {
//     for (i = max; i > min; i -= 1) {
//         console.log(i)
//     }
// }
// console.log(printReverse(5, 19));

// Write a function `sumNums(max)` that returns the sum of all positive numbers less
// than or equal to max.

// function sumNums(max) {
//     let sum = 0
//     for (i = 0; i <= max; i++){
//         sum += i    
//     }
//     return sum
// }
// console.log(sumNums(5)); 

// Define a function `isFactorOf(number, factor)` that returns `true` if `factor`
// is a factor of `number`. `false` otherwise. A factor is a number that divides
// another number without a leftover remainder.

// Define a function `fizzBuzz(max)` that takes a number and prints  every number
// from 0 to `max` that is divisible by either 3 or 5, but not both.
// function fizzBuzz(max) {
//    for (i = 0; i < max; i++) {
//     if (i % 3 === 0 && i % 5 === 0){
//         continue;
//     } else (i % 3 === 0 || i % 5 ===0) {
//          console.log(i);
//         }
//     }
// }
// console.log(fizzBuzz(20));

// Define a function `isPrime(number)` that returns `true` if `number` is prime.
// Otherwise, false. Assume `number` is a positive integer.
function isPrime(number) {              
    if (number < 2) {             //1 is automaticcally false, not prime so we set that first 
        return false;
    }
    for (i = 2; i < number; i++) {     //basic for loop iteration 
        if (number % i === 0) {    //if num % i = 0 which means no remainder, it is not a prime
            return false;         //therefore return false
        }
    }
    return true;             //we want our other return statement to be outside for loop
}

console.log(isPrime(2));

