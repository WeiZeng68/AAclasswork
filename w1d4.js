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
// let myPeople = ['Volkanovski', 'Adesanya', 'Cannonier', 'Holloway'];
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
    console.log(i + ': '  +  array[i])
    }
}

console.log(logEach(myPeople));

// Write a function range(start, end) that returns an array that contains all
// numbers between 'start' and 'end' in sequential order.
// function range(start, end) {
//     let array = []
//     for (let i = start; i <= end; i++) {
//         array.push(i)
//     }
//     return array;
// }

// console.log(range(1, 5));

// Write a function sumArray(array) that takes in an array of numbers that returns the
// total sum of them.
// function sumArray(array) {
//     let sum = 0; 
//     for (let i = 0; i < array.length; i++) {
//         var num = array[i];
//         sum += num;
//     }
//     return sum;
// }

// console.log(sumArray([5, 6, 4]));
// console.log(sumArray([7, 3, 9, 11]));

// Write a function `capWords(words)` that takes in an array of words and
// returns a new array where every word is capitalized.
// function capWords(words) {
//     let newWords = []
//     for (let i = 0; i < words.length; i++) {   //creates iteration
//         var word = words[i];    //stores the iteration to var word
//         var newWord = word.toUpperCase();   //makes the iteration uppercase
//         newWords.push(newWord);  //push caps iteration to newWords 
//     }
//     return newWords;
// }

// console.log(capWords(['hello', 'boOtCaMp', 'PREP!'])); // => ['HELLO', 'BOOTCAMP', 'PREP!']

// Write a function `wordPeriods(sentence)` that takes in a sentence and returns a new
// sentence where every word has period after it.
function wordPeriods(sentence) {
    let newSentence = sentence.split(' ');  //splits the sentence 
    for (let i = 0; i < newSentence.length; i++) {   //iterate to new stence
        let word = newSentence[i];    //place iteration in variable word
        newSentence[i] = word + '.'    //concatenate 
    }
    let finalSentence = newSentence.join(' ');  
    return finalSentence;  
}
console.log(wordPeriods('hello world')); // => 'hello. world.'
console.log(wordPeriods('what is the weather today')); // => 'what. is. the. weather. today.'

// Write a function `maxValue(array)` that returns the largest value in `array`.
// Assume `array` is an array of numbers.
function maxValue(array) {
    var max = null;
    for (let i = 0; i < array.length; i += 1) {  //iterate through array
        var num = array[i];
        if (num > max || num === null) {    //if num is greater than max or max is not null
            max = num;      //num becomes the new max 
        }
    }
    return max;
}
// console.log(maxValue([12, 6, 43, 2])); // => 43
// console.log(maxValue([])); // => null
// console.log(maxValue([-4, -10, 0.43])); // => 0.43

// Write a function `myIndexOf(array, target)` that takes in an array of
// numbers and a target number as arguments. It should return the index value
// of the target if it is present in the array or -1 if it is not present.
// function myIndexOf(array, target) {

//     for (var i = 0; i < array.length; i++) {    //iterate array
//       var num = array[i];                       //set new variable num equal to array
  
//       if (num === target) {                     
//         return i;
//       }
//     }
//     return -1;                                  //-1 means does not exist 
//   }
// console.log(myIndexOf([1,2,3,4],4));
// console.log(myIndexOf([5,6,7,8],2));

// Write a function `factorArray(array, number)` that takes in an array of
// numbers and a number and returns an array of all the factors.
// function factorArray(array, number) {
//     var factors = [];                             //sets the array 
  
//     for (var i = 0; i < array.length; i++) {      //basic iteration 
//       var num = array[i];                         //sets new variable num to array 
  
//       if (number % num === 0) {   //if number % 0 is = 0 which means no remainders, its a factor
//         factors.push(num);        //push the factor into our result array 
//       }
//     }
  
//     return factors;              //returns result array 
//   }
// console.log(factorArray([2,3,4,5,6],20));
// console.log(factorArray([2,3,4,5,6],35));
// console.log(factorArray([10,15,20,25],5)); 

//Write a function tripler(array) that takes in an array and returns a new array
//containing 3 times every element of the original array.
// function tripler(array) {
//     let tripleResults = [];              //set new array 
//     for (let i = 0; i < array.length; i++) {       //iterate the array 
//         let num = array[i];          //new variable to store the array 
//         let multiple = num * 3      //new variable to multiply the stored arrays variable
//         tripleResults.push(multiple); //push the multiple results into our tripleResults array    

//     }
//     return tripleResults
// }

// console.log(tripler([1,2,3]));
// console.log(tripler([4, 1, 7]));

//Write a function oddRange(end) that takes in a number and returns an array containing
//all positive odd numbers up to `end`.
// function oddRange(end) {
//     var arr = [];         //set array 
//     for (var i = 1; i <= end; i += 2) {  //starts at 1, incrementors of 2 to get odds 
//         arr.push(i);
//     }
      
//     return arr;
// }
      

// console.log(oddRange(13)); // => [ 1, 3, 5, 7, 9, 11, 13 ]
// console.log(oddRange(6)); // => [ 1, 3, 5 ]