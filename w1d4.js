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
// function logEach(array) {
//     for (let i = 0; i < array.length; i++) {
//         console.log('index: ' + i + ' element: ' + array[i]);
//     }
// }

// console.log(logEach(myPeople));

<<<<<<< HEAD
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
// function wordPeriods(sentence) {
//     let newSentence = sentence.split(' ');  //splits the sentence 
//     for (let i = 0; i < newSentence.length; i++) {   //iterate to new stence
//         let word = newSentence[i];    //place iteration in variable word
//         newSentence[i] = word + '.'    //concatenate 
//     }
//     let finalSentence = newSentence.join(' ');  
//     return finalSentence;  
// }
// console.log(wordPeriods('hello world')); // => 'hello. world.'
// console.log(wordPeriods('what is the weather today')); // => 'what. is. the. weather. today.'

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

console.log(maxValue([12, 6, 43, 2])); // => 43
console.log(maxValue([])); // => null
console.log(maxValue([-4, -10, 0.43])); // => 0.43
=======
// Write a function sumArray(array) that takes in an array of numbers that returns the
// total sum of them.
// function sumArray(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         let num = array[i];
//         sum += num;
//     }
// return console.log(sum);
// }

// sumArray([5, 6, 4]); // => 15
// sumArray([7, 3, 9, 11]); // => 30


// Write a function range(start, end) that returns an array that contains all
// numbers between 'start' and 'end' in sequential order.
function Range(start, end) {
    let array = [];
    for (i = start; i < array.length; i++) {
    }
    return array[i];
}

console.log(Range(1,4));
console.log(Range(4,2));
>>>>>>> f0d52cdf85cdf58ed422b4522c115d9b470c33e9
