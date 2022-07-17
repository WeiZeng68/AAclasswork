/***********************************************************************
Write a function threeUniqueVowels(string) that takes in a string and
returns true if the string contains at least three different vowels.


***********************************************************************/

function threeUniqueVowels(string) {
    let vowels = ['a','e','i','o','u'];
    let count = 0;
  
    for (let i = 0; i < vowels.length; i++) {
        let vowel = vowels[i];

        if (string.indexOf(vowel) > -1) {
            count++
        }
    }
    return count >= 3; 
}

console.log(threeUniqueVowels('delicious')); // => true
console.log(threeUniqueVowels('bootcamp prep')); // => true
console.log(threeUniqueVowels('bootcamp')); // => false
console.log(threeUniqueVowels('dog')); // => false
console.log(threeUniqueVowels('go home')); // => false

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = threeUniqueVowels;
