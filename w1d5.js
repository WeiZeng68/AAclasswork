
//Write a function reverseOddRange(start, end) that returns an array containing all
//odd numbers between 'start' and 'end'  in reverse-sequential order. Use a
//loop to do this.

// function reverseOddRange(start, end) {
//     let array = [];                     //set array
//     for (i = end ; i >= start; i--) {  //iteration starts at end since we want backwards, then --     
//       if (i % 2 === 1) {               //if i % 2 = 1 means its odd 
//       array.push(i);                   //push array
//       }
//     }
//     return array;
//   }
  
//   console.log(reverseOddRange(10, 20)) 
//   console.log(reverseOddRange(3, 7)) 
//   console.log(reverseOddRange(9, 5)) 


//Write a function isSquare(number) that takes in a number and returns true if the
//number is a perfect square, false otherwise. A perfect square is a number that is
//the result of squaring another number. For example, 3 * 3 is 9, so 9 is perfect
//square. 4 * 4 is 16, so 16 is a perfect square. 18 is not a perfect square.
// function isSquare(number) {
//     for (let i = 2; i < number; i++) {    //iteration starts at 2 
//         if (i * i === number) {     //we can use this to follow prime numbers 
//             return true; 
//         }
//     }
//     return false;
// }

// console.log(isSquare(7)); 
// console.log(isSquare(15));
// console.log(isSquare(4));


//Write a function mysticNumbers(max) that returns an array of numbers less than `max`.
//Each number should be either divisible by 4 or 6, BUT NOT BOTH. The numbers
//should be in reverse-sequential order.
// function mysticNumbers(max) {
//     let array = []                     //SET ARRAY 
//     for (let i = max; i >= 4; i--) { //i = max CAUSE START AT MAX, i > 4 cause divisble
//         if (i % 4 === 0 && i % 6 === 0) {  //AND to skip
//             continue;                    //continue skips iteration we dont want 
//         }
//         if (i % 4 === 0 || i % 6 === 0) {    //we want the OR 
//             array.push(i)                   //push the ORs to array
//         }
//     }
//     return array;
// }

// console.log(mysticNumbers(25)); 
// console.log(mysticNumbers(14));


//Write a function firstOrLast(array) that takes in an array and returns either:
//the first element if there is an even number of elements in the array
//the last element if there is an odd number of elemetns in the array
// function firstOrLast(array) {
//     if (array.length % 2 === 0) {    //array.length % 2 = 0 means its even     
//         return array [0];             //so we return the first index which is 0
//     }
//     if (array.length !== 0) {          //if array.length % 2 is not 0 means its odd
//         return array[array.length -1];     //we return the last index 
//     }
// }

// console.log(firstOrLast(['a', 'b', 'c', 'd']))
// console.log(firstOrLast(['Jenny', 'Mary', 'Mark']))   

//Write a function fromMeToYou(sentence) that returns an string where the word 'me'
//is replaced with 'you'.
// function fromMeToYou(sentence) {
//     let words = sentence.split (' ');  //split sentence with new variable words 
//     let array = []                    //set the array 
//     for (let i = 0; i < words.length; i++) {  //set iteration with words.length since we replace
//         let word = words[i];              //put iteration into new variable word 
//         if (word === 'me') {            //if word = me then replace you with push
//             array.push('you')
//         }
//         else {
//             array.push(word)
//         }
//     }
//     return array.join(' ');           //return array with join
// }

// console.log(fromMeToYou('that made me laugh'));
// console.log(fromMeToYou('love me or hate me'));

// Write a function `isInside(array, ele)` that returns true if `ele` is an element
// inside of the `array`, false otherwise.
// function isInside(array, ele) {
//     if (array.indexOf(ele) > -1) {    //this means ele is inside of array
//         return true;   //so return true if inside
//     }
//     else {
//         return false;      //false if outside
//     }
// }
// console.log(isInside(['chase', 'phi', 'eliot'], 'eliot'));
// console.log(isInside(['chase', 'phi', 'eliot'], 'fred'));


// Write a function `reverseStr(str)` that takes in a string as a parameter and
// returns the string but with the characters in reverse.
// function reverseStr(str) {
//     let reverse = '';
//     for (let i = str.length - 1; i >= 0; i--) {  //str.length - 1 starts the loop reverse. 
//         let char = str[i];      //new variable char to store the loop
//         reverse += char;       //add the loop to reverse 
//     }
//     return reverse;         //return reverse 
// }

// console.log(reverseStr('bootcamp')); //=> 'pmactoob'
// console.log(reverseStr('App Academy')); //=> 'ymedacA ppA'

// Write a function `luckySevens(max)` that returns an array of all numbers up
// to max (inclusive) that are divisible by 7.
// function luckySevens(max) {
//     let array = [];                  //create array
//     for (let i = 1; i <= max; i++) {    //iterate through starting from 1 to max 
//         if (i % 7 === 0) {            //if max is divisble by 7
//             array.push(i);            //push to array
//         }
//     }
//     return array;
// }
// console.log(luckySevens(25)); // => [ 7, 14, 21 ]
// console.log(luckySevens(42)); // => [ 7, 14, 21, 28, 35, 42 ]

// Write a function `copyMachine(element, num)` that takes in an element and a number
// it should return an array of length `num` that is filled with `element`.
// function copyMachine(element, num) {
//     let array = []
//     for (let i = 0; i < num; i++) {  //iterates the num 
//         array.push(element)        //then pushes into array with elements replacing nums
//     }
//     return array; 
// }

// console.log(copyMachine('candy', 0)); // => []
// console.log(copyMachine('candy', 2)); // => [ 'candy', 'candy' ]
// console.log(copyMachine('bread', 4)); // => [ 'bread', 'bread', 'bread', 'bread' ]
// console.log(copyMachine(11, 6)); // => [ 11, 11, 11, 11, 11, 11 ]

// Write a function `everyOtherWord(sentence)` that takes in a sentence and returns
// an array containing every other word in that sentence.
// function everyOtherWord(sentence) {
//     let words = sentence.split(' ');   //split sentence first   
//     let array = [];                //create array 
//     for (let i = 0; i <words.length; i += 2) {    //iterations of 2 to skip 
//         array.push(words[i]);     //push to array
//     }
//     return array;
// }
// console.log(everyOtherWord('hello how are you doing on this lovely day?')); // => [ 'hello', 'are', 'doing', 'this', 'day?' ]
// console.log(everyOtherWord('the weather is wonderful')); // => [ 'the', 'is' ]

// Write a function evenCaps(sentence) that takes in a sentence as an
// argument and returns the same string with each even index being
// capitalized. Index 0 counts as even.
function evenCaps(sentence) {
    let words = (' ');
    for (let i = 0; i < sentence.length; i++) {
        let word = sentence[i];
        if (i % 2 === 0) {
        let capitalWord = word.toUpperCase();
        words += capitalWord;
        }
        else {
        words += word;
        }
    }
return words
}

console.log(evenCaps("the book is in front of the table"));
