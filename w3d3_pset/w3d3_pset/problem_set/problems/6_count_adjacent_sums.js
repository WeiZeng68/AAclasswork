/***********************************************************************
Write the function `countAdjacentSums(arr, n)` that takes an array and
number. It should count the number of times that two adjacent numbers in
an array add up to n.

Examples:

countAdjacentSums([1, 5, 1], 6) //=> 2
countAdjacentSums([7, 2, 4, 6], 7) //=> 0
countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13) //=> 3
***********************************************************************/

function countAdjacentSums(arr, n) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === n) {
                count++
            }
        }
    }
    return count; 
}


console.log(countAdjacentSums([1, 5, 1], 6)) //=> 2
console.log(countAdjacentSums([7, 2, 4, 6], 7)) //=> 0
console.log(countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13)) //=> 3

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = countAdjacentSums;
