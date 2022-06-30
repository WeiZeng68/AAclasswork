// let myArray = ['wei', 'we2', 'wei3', 'wei4', 'wei5'];

// myArray.push('wei7');

// console.log(myArray);

// console.log(myArray[myArray.length - 1]);


//function to print all elements of an array
// function printArray(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }
let myPeople = ['Volkanovski', 'Adesanya', 'Cannonier', 'Holloway'];
// console.log(printArray(myPeople));

//function to print array in reverse
//     function printArrayReverse(arr) {
//         for (let i = arr.length - 1; i >= 0; i--) {
//             console.log(arr[i])
//         }
//     }

// console.log(printArrayReverse(myPeople));

// Write a function `logEach(array)` that prints every element of the array and its
// index to the console.
function logEach(array) {
    for (let i = 0; i < array.length; i++) {
        console.log('index: ' + i + ' element: ' + array[i]);
    }
}

console.log(logEach(myPeople));