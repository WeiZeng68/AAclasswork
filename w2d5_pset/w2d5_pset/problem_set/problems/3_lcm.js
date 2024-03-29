/***********************************************************************
Write a function `lcm(num1, num2)` that returns the lowest number which
is a multiple of both num1 and num2.

Examples:

lcm(2, 3); // => 6
lcm(6, 10); // => 30
lcm(24, 26); // => 312
***********************************************************************/

// function lcm(num1, num2) {
//     for (let i = 1; true; i++) {
//         if (i % num1 === 0 && i % num2 === 0) {
//             return i;
//         }
//     }
// }

function lcm(num1, num2) {
    let i = num1;

    while (true) {
        if (i % num2 === 0) {
            return i;
        }
    i += num1;
    }
}

console.log(lcm(2, 3)); // => 6
console.log(lcm(6, 10)); // => 30
console.log(lcm(24, 26)); // => 312

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = lcm;
