/***********************************************************************
Write a function `signFlipCount` that takes in an array of numbers as
arguments. The function should return the number of times adjacent
numbers in the array switch signs from positive to negative or vice
versa. The number 0 is neither positive nor negative.

Examples:

signFlipCount([5, 6, 10, 3]); //=> 0
signFlipCount([-12, 0, -3, -5]); //=> 0
signFlipCount([-12, 10, -3, -5]); //=> 2
signFlipCount([1, -2, -3, -4]); //=> 1
signFlipCount([-1, 11.3, -3, 100]); //=> 3
***********************************************************************/

function signFlipCount(numbers) {
    let count = 0;

    for (let i = 0; i < numbers.length; i++) {
        let num1 = numbers[i];
        for (let j = i + 1; j < numbers.length; j++) {
            let num2 = numbers[j];
            if ((num1 > 0 && num2 < 0) || (num1 < 0 && num2 > 0)) {
                count++
            }
        }
    }
    return count;
}

console.log(signFlipCount([5, 6, 10, 3])); //=> 0
console.log(signFlipCount([-12, 0, -3, -5])); //=> 0
console.log(signFlipCount([-12, 10, -3, -5])); //=> 2
console.log(signFlipCount([1, -2, -3, -4])); //=> 1
console.log(signFlipCount([-1, 11.3, -3, 100])); //=> 3

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = signFlipCount;
