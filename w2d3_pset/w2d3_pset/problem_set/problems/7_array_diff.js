/***********************************************************************
Write a function `arrayDiff(arr1, arr2)` that takes in two arrays. The 
function should return a new array, containing the elements of arr1 that
are not also in arr2.


***********************************************************************/


function arrayDiff(arr1, arr2){
    let distinct = []
    
    for (let i = 0; i < arr1.length; i++) {
        let ele = arr1[i]
        if (arr2.indexOf(ele) === -1) {  //if ele/arr1 is not inside arr2 
            distinct.push([ele])           //then we push
        }
    }
    return distinct;
}

array3 = ['a', 'ab', 'c', 'd', 'c']
array4 = ['d']
console.log(arrayDiff(array3, array4)); // => ['a', 'ab', 'c', 'c']

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = arrayDiff;

