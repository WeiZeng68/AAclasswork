/***********************************************************************
Write a function objectSelect(obj, cb) which takes as arguments an object
and a callback, and returns a new object where all the key value pairs
return true, when passed into the callback.

***********************************************************************/

function objectSelect(obj, cb) {
  let newObj = {};

  for (let k in obj) {
    let v = obj[k]
    if (cb(k, v)) {
      newObj[k] = v;
    }
  }
  return newObj;
}

var obj = {
  one: "one",
  two: "something else",
  three: "three",
  four: "another thing."
};

function isEqual(a, b) {
  return a === b;
}

var matchingPairs = objectSelect(obj, isEqual);

console.log(matchingPairs)


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = objectSelect;
