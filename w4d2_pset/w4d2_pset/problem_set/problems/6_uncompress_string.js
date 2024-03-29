/***********************************************************************
Write a function `uncompressString(str)` that takes in a "compressed"
string and returns the "uncompressed" version of the string. In the
input `str`, every letter is followed by a single digit number that
specifies how many times that character is repeated.

HINT: Use the built-in `Number` function to turn the string
representation of a number into a number
Number('42'); // => 42;

Examples:

uncompressString('a2b4c1'); // => 'aabbbbc'
uncompressString('b1o2t1'); // => 'boot'
uncompressString('x3y1x2z4'); // => 'xxxyxxzzzz'
***********************************************************************/

function uncompressString(str) {
    let uncompressed = '';

    for (let i = 0; i < str.length; i += 2) {  //gets the chars 
        let char = str[i];
        let num = Number(str[i + 1]);
        
        for (let j = 0; j < num; j++) {   //repeat concatentation according to num 
            uncompressed += char; 
        }
    }
    return uncompressed; 
}

console.log(uncompressString('a2b4c1')); // => 'aabbbbc'
console.log(uncompressString('b1o2t1')); // => 'boot'
console.log(uncompressString('x3y1x2z4')); // => 'xxxyxxzzzz'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = uncompressString;
