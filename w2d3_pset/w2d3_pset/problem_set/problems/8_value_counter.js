/***********************************************************************
Write a function `valueCounter(obj, val)` that takes in an object and a 
value, the function should return the number of times 'val' repeats as a
value in 'obj'.


***********************************************************************/

function valueCounter(obj, value){
  let count = 0;

  for (let key in obj) {
    let val = obj[key]

    if (val === value) {
        count++
    }
  }
  return count;
}

obj1 = {1: 'Anne', 2: 'Alvin', 3: 'Anne', 4: 'Anne'}
console.log(valueCounter(obj1, 'Anne')) // => 3

obj2 = {Anne: 50, Alvin: 1, JJ: 100, Roman: 100}
console.log(valueCounter(obj2, 88)) // => 0

pairs = {Anne: 'Roman', Alvin: 'Roman', JJ: 'Anne', Roman: 'Anne'}
console.log(valueCounter(pairs, 'Roman')) // => 2

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = valueCounter;

