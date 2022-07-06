/***********************************************************************
Write a function `mirrorArray(array)` that takes in an array as an
argument and returns a new array "mirrored" as shown in the examples:

Examples:

mirrorArray([1,2,3]); // => [ 1, 2, 3, 3, 2, 1 ]
mirrorArray(['a', 'b', 'c', 'd']); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]
***********************************************************************/
//easy solve using 2 for loops 
function mirrorArray(array) {
    let mirrored = [] 
        for (let i = 0; i < array.length; i++) { 
            mirrored.push(array[i]);
        }
        for (let i = array.length - 1; i >= 0; i--) {
            mirrored.push(array[i]);
        }
    return mirrored;
}

console.log(mirrorArray([1,2,3])); 
console.log(mirrorArray(['a', 'b', 'c', 'd'])); 

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = mirrorArray;

