/***********************************************************************
Write a function oddOnesOut(array) that takes in an array of strings and
returns a new array array containing only elements that appeared an even
number of times in the input array.

Examples:

var arr1 = ['a', 'b', 'b', 'c', 'd', 'c', 'c', 'd']
oddOnesOut(arr1); // => [ 'b', 'd' ]

var arr2 = ['fish', 'fish', 'dog', 'cat', 'dog', 'dog']
oddOnesOut(arr2); // => [ 'fish' ]
***********************************************************************/

function elementCount(array) {
    let count = {};

    for (let i = 0; i < array.length; i++) {
        let ele = array[i];
        if (count[ele] === undefined) {
            count[ele] = 1
        } else {
            count[ele]++
        }
    }
    return count; 
}

function oddOnesOut(array) {
    let count = elementCount(array);
    let evens = [];

    for (let ele in count) {
        if (count[ele] % 2 === 0) {
            evens.push(ele)
        }
    }
    return evens; 
}

var arr1 = ['a', 'b', 'b', 'c', 'd', 'c', 'c', 'd']
console.log(oddOnesOut(arr1)); // => [ 'b', 'd' ]

var arr2 = ['fish', 'fish', 'dog', 'cat', 'dog', 'dog']
console.log(oddOnesOut(arr2)); // => [ 'fish' ]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = oddOnesOut;
