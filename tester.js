// let obj = {
//     1: 'one',
//     2: 'two',
//     3: 'three'
// }; 

// for (let key in obj) {
//     console.log(key + ' - ' + obj[key]);
//   }

// let dog1 = {
//     name: 'milo'
// };

// dog1['speak'] = function(string) {
//     console.log('WOOF ' + string + ' WOOF!!!');
// }

// dog1.speak('wei'); 

// dog1['speak'] = function(string) {
//     return 'WOOF ' + string + ' WOOF!!!';
// }

// console.log(dog1.speak('wei'));

console.log([0,1,2,"something"][3])

let array1 = [
    ['a','b','c'],
    ['d','e','f'],
    ['g','h']
]


function printArr(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            console.log(array[i][j])
        }
    }
}

printArr(array1)