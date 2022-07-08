/***********************************************************************
Write a function `countInnerElement(arr)` that takes in a 2-D array of elements.
Each element of 'arr' is a sub array that contains multiple elements. The number
of elements contained in each sub array are not the same. We can assume each sub
array contains at least one element. We should return an object that counts
how many times each element in each sub array repeats.

***********************************************************************/

function countInnerElement(arr) {
  let count = {}

  for (let i = 0; i < arr.length; i++) {         //iterate 
    for (let j = 0; j < arr[i].length; j++) {     //iterate again for elements 
        let subArr = arr[i];           
        let ele = subArr[j];
        if (count[ele] === undefined) {   
            count[ele] = 1
        } else {
            count[ele]++
        }
    }
  }
  return count;
}

var arr1 = [
  [1,2,4,5],
  [2,7,4],
  [1,4,5,2,7]
]

console.log(countInnerElement(arr1)); // => {1: 2, 2: 3, 4: 3, 5: 2, 7: 2}

var arr2 = [
  ['a','b','c','d'],
  ['a','b'],
  ['a','c','d','a']
]

console.log(countInnerElement(arr2)); // => {a: 4, b: 2, c: 2, d: 2}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = countInnerElement;
