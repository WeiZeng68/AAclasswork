/***********************************************************************
Write a function safeSpeedChange(speeds) that takes in an array of speed
numbers. The function should return true if consecutive speeds in the
array differ by no more than 5, false otherwise.

Examples:

safeSpeedChange([3, 3, 2, 6, 8, 7]); //=> true
safeSpeedChange([3, 3, 2, 6, 12, 10]); // => false
safeSpeedChange([8, 10, 4, 3, 2]); // => false
***********************************************************************/

function safeSpeedChange(speeds) {
    for (let i = 0; i < speeds.length; i++) {
        let diff = speeds[i + 1] - speeds[i]
        if (Math.abs(diff) > 5) {
            return false;
        }
    }
    return true; 
}

console.log(safeSpeedChange([3, 3, 2, 6, 8, 7])); //=> true
console.log(safeSpeedChange([3, 3, 2, 6, 12, 10])); // => false
console.log(safeSpeedChange([8, 10, 4, 3, 2])); // => false

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = safeSpeedChange;
