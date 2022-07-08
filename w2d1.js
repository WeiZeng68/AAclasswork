// Define a function `logBetween(lowNum, highNum)` that will print every number
// from `lowNum` to `highNum`, inclusive. Inclusive means that the range includes
// `lowNum` and `highNum`. Hint: this function only needs to print using `console.log`,
// it does not need to return.

// function logBetween(lowNum, highNum) {
//     for (let i = lowNum; i <= highNum; i++) {
//         console.log(i)
//     }
// }

// logBetween(3, 6);

// Write a function `logBetweenStepper(min, max, step)` that takes in 3 numbers as
// parameters. The function should print out numbers between `min` and `max` at `step`
// intervals. See the following examples.
// function logBetweenStepper(min, max, step) {
//     for (let i = min; i <= max; i += step) {
//         console.log(i)
//     }
// }

// logBetweenStepper(1, 10, 2);

// Write a function `printFives(max)` that prints out the multiples of 5 that are
// less than max.
// function printFives(max) {
//     for (let i = 0; i < max; i += 5) {
//         if (max % 5 === 0) {
//             console.log(i)
//         }
        
//     }
// }

// printFives(20)

// Write a function `printReverse(min, max)` that print out all numbers from max
// to min (exclusive), in reverse order.
// function printReverse(min, max) {
//     for (let i = max; i >= min; i--) {
//         console.log(i)
//     }
// }

// printReverse(13, 18) 

// Write a function `sumNums(max)` that returns the sum of all positive numbers less
// than or equal to max.
// function sumNums(max) {
//     let sum = 0

//     for (let i = 0; i <= max; i++) {
//         sum += i
//     }
//     return sum
// }   


// console.log(sumNums(4)); // => 10
// console.log(sumNums(10)); // => 55
// console.log(sumNums(365)); 

// Define a function `isFactorOf(number, factor)` that returns `true` if `factor`
// is a factor of `number`. `false` otherwise. A factor is a number that divides
// another number without a leftover remainder.
// function isFactorOf(number, factor) {
//     if (number % factor === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(isFactorOf(6,2)); 
// console.log(isFactorOf(-6, 2));
// console.log(isFactorOf(5,0));
// console.log(isFactorOf(22, 7));

// Define a function `fizzBuzz(max)` that takes a number and prints  every number
// from 0 to `max` that is divisible by either 3 or 5, but not both.
// function fizzBuzz(max) {
//     for (let i = 0; i < max; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             continue;
//         }
//         if (i % 3 === 0 || i % 5 ===0) {
//             console.log(i)
//         } 
//     }
// }

// fizzBuzz(20);

// Define a function `isPrime(number)` that returns `true` if `number` is prime.
// Otherwise, false. Assume `number` is a positive integer.
// function isPrime(number) {
//     if (number < 2) {
//         return false; 
//     }
//     for (let i = 2; i < number; i++) {
//         if (number % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(isPrime(2)); // => true
// console.log(isPrime(10)); // => false
// console.log(isPrime(11)); // => true
// console.log(isPrime(9)); // => false
// console.log(isPrime(2017)); // => true

// Write a function `logEach(array)` that prints every element of the array and its
// index to the console.
// function logEach(array) {
//     for (let i = 0; i < array.length; i++) {
//         console.log(i + ' :' + array[i]);
//     }
// }

// logEach(["Anthony", "John", "Carson"]);


// Write a function range(start, end) that returns an array that contains all
// numbers between 'start' and 'end' in sequential order.
// function range(start, end) {
//     let array = []

//     for (let i = start; i <= end; i++) {
//     array.push(i)
//     }
//     return array; 
// }

// console.log(range(1,4));

// Write a function sumArray(array) that takes in an array of numbers that returns the
// total sum of them.
// function sumArray(array) {
//     let sum = 0

//     for (let i = 0; i < array.length; i++) {
//         let num = array[i]
//         sum += num
//     }
//     return sum
// }

// console.log(sumArray([5, 6, 4]));

// Write a function `capWords(words)` that takes in an array of words and
// returns a new array where every word is capitalized.
// function capWords(words) {
//     let newWords = [] 

//     for (let i = 0; i < words.length; i++) {
//         let word = words[i];
//         let wordsCap= word.toUpperCase();
//         newWords.push(wordsCap)
//     }
//     return newWords;
// }

// console.log(capWords(['hello', 'boOtCaMp', 'PREP!'])); 

// Write a function `wordPeriods(sentence)` that takes in a sentence and returns a new
// sentence where every word has period after it.
// function wordPeriods(sentence) {
//     let newSentence = sentence.split(' ');

//     for (let i = 0; i < newSentence.length; i++) {
//         let word = newSentence[i];
//         newSentence[i] = word + ' . ';
//     }
//     let finalSentence = newSentence.join(' ');
//     return finalSentence;
// }
        
// console.log(wordPeriods('hello world'));

// Write a function `maxValue(array)` that returns the largest value in `array`.
// Assume `array` is an array of numbers.
// function maxValue(array) {
//     let max = null;

//     for (let i = 0; i < array.length; i++) {
//         let num = array[i]
//         if (max < num) {
//             max = num
//         }
//     }
//     return max; 
// }

// console.log(maxValue([12, 6, 43, 2]));
// console.log(maxValue([]));
// console.log(maxValue([-4, -10, 0.43]));

// Write a function `myIndexOf(array, target)` that takes in an array of
// numbers and a target number as arguments. It should return the index value
// of the target if it is present in the array or -1 if it is not present.
// function myIndexOf(array, target) {

//     for (let i = 0; i < array.length; i++) {
//         let num = array[i];

//         if (num === target) {
//             return i;
//         }
//     }
//     return -1; 
// }

// console.log(myIndexOf([1,2,3,4],4)) 
// console.log(myIndexOf([5,6,7,8],2)) 

// Write a function `factorArray(array, number)` that takes in an array of
// numbers and a number and returns an array of all the factors.
// function factorArray(array, number) {
//     let factors = []

//     for (let i = 0; i < array.length; i++) {
//         let num = array[i]

//         if (number % num === 0) {
//             factors.push(num)
//         }
//     }
//     return factors;
// }

// console.log(factorArray([2,3,4,5,6],20));
// console.log(factorArray([2,3,4,5,6],35));
// console.log(factorArray([10,15,20,25],5));

// Write a function `isInside(array, ele)` that returns true if `ele` is an element
// inside of the `array`, false otherwise.
// function isInside(array, ele) {
//     if (array.indexOf(ele) > -1) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function isInside(array, ele) {
//     return (array.indexOf(ele) > -1);
// }

// console.log(isInside(['chase', 'phi', 'eliot'], 'bill')); 
// console.log(isInside(['base', 'phi', 'eliot'], 'base')); 

// Write a function `reverseStr(str)` that takes in a string as a parameter and
// returns the string but with the characters in reverse.
// function reverseStr(str) {
//     let reversed = '';

//     for (let i = str.length - 1; i >= 0; i--) {
//         let char = str[i];
//         reversed += char;
//     }
//     return reversed;
// }

// console.log(reverseStr('bootcamp'));

// Write a function `luckySevens(max)` that returns an array of all numbers up
// to max (inclusive) that are divisible by 7.
// function luckySevens(max) {
//     let array = []

//     for (let i = 7; i <= max; i++) {
    
//         if (i % 7 === 0) {
//             array.push(i);
//         }
//     }
//     return array;
// }

// console.log(luckySevens(25)); // => [ 7, 14, 21 ]
// console.log(luckySevens(49)); // => [ 7, 14, 21, 28, 35, 42 ]

// Write a function `everyOtherWord(sentence)` that takes in a sentence and returns
// an array containing every other word in that sentence.
function everyOtherWord(sentence) {
    let words = sentence.split(' ');
    let array = [];

    for (let i = 0; i < words.length; i += 2) {
        let word = words[i]
        array.push(word)
    }
    return array; 
}

console.log(everyOtherWord('hello how are you doing on this lovely day?')); // => [ 'hello', 'are', 'doing', 'this', 'day?' ]
console.log(everyOtherWord('the weather is wonderful')); // => [ 'the', 'is' ]