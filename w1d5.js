
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
function fromMeToYou(sentence) {
    let words = sentence.split (' ');
    let array = []
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (word === 'me') {
            array.push('you')
        }
        else {
            array.push(word)
        }
    }
    return array.join(' ');
}

console.log(fromMeToYou('that made me laugh'));
console.log(fromMeToYou('love me or hate me'));