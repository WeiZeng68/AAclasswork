/***********************************************************************
Given an arbitrary ransom note string and another string containing letters 
from all the magazines, write a function that will return true if the ransom note 
can be constructed from the magazines; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

Examples:
canConstruct("a", "b");               // => false
canConstruct("a", "aa");              // => true
canConstruct("ababc", "dbaccab");     // => true
canConstruct("aabbc", "aaaabbbdef");  // => false
***********************************************************************/

function eleCount(str) {
    let count = {};

    for (let i = 0; i < str.length; i++) {
        let ele = str[i];
        if (count[ele] === undefined) {
            count[ele] = 1
        } else {
            count[ele]++
        }
    }
    return count; 
}

function canConstruct(ransomNote, magazine) {
    let noteCount = eleCount(ransomNote);
    let magCount = eleCount(magazine);

    for (let char in noteCount) {
        let numLetters = noteCount[char];

        if(magCount[char] === undefined || magCount[char] < numLetters) {
            return false;
        }
    }
    return true; 
}

console.log(canConstruct("a", "b"));               // => false
console.log(canConstruct("a", "aa"));              // => true
console.log(canConstruct("ababc", "dbaccab"));     // => true
console.log(canConstruct("aabbc", "aaaabbbdef"));  // => false


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = canConstruct;
