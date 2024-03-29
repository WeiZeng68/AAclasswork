/*******************************************************************************
Write a function highestScore(students) that takes in an array of student objects
as a parameter. It should return a string that corresponds to the student with
the highest score. The string should contain that student's initials
concatenated with their id. Assume the array contains at least 1 student object and
the student with the highest score is unique (there are no ties).
Example:

var students = [
 {name: 'Alvin Zablan', id: 128, score: -42},
 {name: 'Eliot Bradshaw', id: 32, score: 57},
 {name: 'Tommy Duek', id: 2, score: 99},
 {name: 'Fred Sladkey', id: 256, score: 94}
];

highestScore(students); //=> 'TD2'
*******************************************************************************/

function highestScore(students) {
  let max = 0;
  let maxStudent = null;

  for (let student of students) {
    console.log(student)
    let scores = student.score;
    if (max < scores) {
      max = scores
      maxStudent = student
    }
  }
  return maxStudent.name.split(' ').map(stud => stud[0]).join('') + maxStudent.id
}

// var students = [
//   {name: 'Alvin Zablan', id: 128, score: -42},
//   {name: 'Eliot Bradshaw', id: 32, score: 57},
//   {name: 'Tommy Duek', id: 2, score: 99},
//   {name: 'Fred Sladkey', id: 256, score: 94}
//  ];
 
//  console.log(highestScore(students)); //=> 'TD2'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = highestScore;
