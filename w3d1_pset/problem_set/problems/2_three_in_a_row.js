/***********************************************************************
Write a function `threeInARow(arr)` that takes in an array of numbers
and returns true if the array contains 3 of the same number
consecutively. The function should return false otherwise.

Examples:

threeInARow([4, 3, 7, 7, 7, 13, 8]); // => true;
threeInARow([10, 9, 20, 33, 3, 3]); // => false;
***********************************************************************/

function threeInARow(arr) {
    for (let i = 0; i < arr.length; i++) {
        let num1 = arr[i];
        let num2 = arr[i + 1];
        let num3 = arr[i + 2];
        
        if (num1 === num2 && num1 === num3) {
            return true;
        }
    }
    return false; 
}

console.log(threeInARow([4, 3, 7, 7, 7, 13, 8])); // => true;
console.log(threeInARow([10, 9, 20, 33, 3, 3])); // => false;

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = threeInARow;
