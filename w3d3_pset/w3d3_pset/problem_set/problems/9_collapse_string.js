/***********************************************************************
Write a function `collapseString(str)` that takes in a string as an
argument. The function should return the string where 'streaks' of
consecutive characters are collapsed to a single character.

Examples:

collapseString('apple'); //=> 'aple'
collapseString('AAAaalviiiiin!!!'); //=> 'Aalvin!'
collapseString('hello   app academy'); //=> 'helo ap academy'
***********************************************************************/

function collapseString(str) {
    let collapsed = '';

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let lastChar = collapsed[collapsed.length - 1]

        if (char !== lastChar) {
            collapsed += char;
        }
    }
    return collapsed; 
}

console.log(collapseString('apple')); //=> 'aple'console.log(
console.log(collapseString('AAAaalviiiiin!!!')); //=> 'Aalvin!'console.log(
console.log(collapseString('hello   app academy')); //=> 'helo ap academy'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = collapseString;
