// function to check if num is odd using true false
// function isOdd(num) {
//  return num % 2 !== 0; 
// }

// console.log(isOdd(9));

 function isOdd(num) {
    if (num % 2 !== 0)
   return true;
  else
  return false; 
 }

// console.log(isOdd(9));
// //
// function plusFive(num) {
//     return num + 5;
//   }

// console.log(plusFive(5));


// function threeOrSeven(num) {
//     return num % 7 === 0 || num % 3 === 0;
// }

// console.log(threeOrSeven(20));

// function hello(str) {
//     return ("hello" + str);
//   }

// console.log(hello(" the crabs are delicious today"));

// function yell(string) {
//     return string.toUpperCase();
//   }

// console.log(yell("the soup sucks today"));

// function whisper(string) {
//     return string.toLowerCase();
//   }

// console.log("THE SOUP IS GOOD TODAY");

// function isSubstring(searchString, subString) {
     
//   }


function averageOfFour(num1, num2, num3, num4){
    let sum = num1 + num2 + num3 + num4;
    let avg = sum / 4;
    return avg;
}

console.log(averageOfFour(1,2,3,4));
