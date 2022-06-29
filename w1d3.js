// Define a function `logBetween(lowNum, highNum)` that will print every number
// from `lowNum` to `highNum`, inclusive. Inclusive means that the range includes
// `lowNum` and `highNum`. Hint: this function only needs to print using `console.log`,
// it does not need to return.
// function logBetween(lowNum, highNum) {
//     for (i = lowNum; i <= highNum; i += 1) {
//         console.log(i)
//     }
// }   
// logBetween(-1, 2);


// Write a function `logBetweenStepper(min, max, step)` that takes in 3 numbers as
// parameters. The function should print out numbers between `min` and `max` at `step`
// intervals.
// function logBetweenStepper(min, max, step) {
//     for (i = min; i < max; i += step) {
//         console.log(i)
//     }
// }
// logBetweenStepper(10,20,1)

// Write a function `printFives(max)` that prints out the multiples of 5 that are
// less than max.
// function printFives(max) {
//     for (i = 0; i < max; i += 5) {
//         if (i % 5 === 0) {
//             console.log(i)
//         }
//     }
// }
// console.log(printFives(20));

// function printFives(max) {
//     for (i = 0; i < max; i += 5) {
//         console.log(i)
//     }
// }
// printFives(20);

// Write a function `printReverse(min, max)` that print out all numbers from max
// to min (exclusive), in reverse order.
function printReverse(min, max) {
    for (i = min; i < max; i -= 1) {
        console.log(i)
    }
}

printReverse(5, 19)