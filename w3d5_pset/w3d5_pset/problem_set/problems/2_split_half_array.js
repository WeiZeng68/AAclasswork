/***********************************************************************
Write a function splitHalfArray(array) that takes in an array as an
argument and returns two halves of that array split in the middle. If
the array has an odd number of elements, then the middle element should
be excluded.

***********************************************************************/

function splitHalfArray(array) {
    let mid = Math.floor(array.length / 2); 

    if (array.length % 2 === 0) {
        let halves = [array.slice(0, mid), array.slice(mid)];
        return halves 
    } else {
        let halves = [array.slice(0, mid), array.slice(mid + 1)];
        return halves
    }

}

console.log(splitHalfArray([1, 2, 3, 4, 5]));
// => [ [ 1, 2 ], [ 4, 5 ] ]

console.log(splitHalfArray(['a', 'b', 'c', 'd', 'e', 'f']));
// => [ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = splitHalfArray;
