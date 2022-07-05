/***********************************************************************
Write a function `countScores(people)` that takes in an array of score
objects (people) as its input. A score object has two key-value pairs:
a name (string) and a score (number). `countScores(people)` should
return an object that has key-value pairs where each name is a key and
the value is their total score.
***********************************************************************/


function countScores(people) {
  let count = {};

  for (let i = 0; i <people.length; i++) {
    let person = people[i];

    if (count[person.name] === undefined) { //checks if name is not a key 
      count[person.name] = person.score;
    } else {   //the key is already inside 
      count[person.name] += person.score;
    }  
  }
  return count;
}

var ppl = [ {name: "Anthony", score: 10},
            {name: "Fred", score : 10},
            {name: "Anthony", score: -8},
            {name: "Winnie", score: 12}];

var countPpl = countScores(ppl);
console.log(countPpl); //=> { Anthony: 2, Fred: 10, Winnie: 12 }


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = countScores;
