/**************************************************************************************
Write a function `isPowerOfTwo(num)` that takes in a number and returns a boolean indicating
whether or not the number is a power of two.

The powers of two are 1, 2, 4, 8, 16, 32, 64, ... etc

Examples:

isPowerOfTwo(1);  // => true
isPowerOfTwo(32); // => true
isPowerOfTwo(12); // => false
isPowerOfTwo(33); // => false
isPowerOfTwo(-8); // => false

Difficulty: Medium
*************************************************************************************/

function isPowerOfTwo(num) {
    for (let i = 0; i < num; i++) {
        if(Math.pow(2, i) === num) {
            return true;
        }
    }
    return false; 
}


console.log(isPowerOfTwo(1));  // => true
console.log(isPowerOfTwo(32)); // => true
console.log(isPowerOfTwo(12)); // => false
console.log(isPowerOfTwo(33)); // => false
console.log(isPowerOfTwo(-8)); // => false

/******************** DO NOT MODIFY ANYTHING UNDER THIS LINE *************************/

module.exports = isPowerOfTwo;
