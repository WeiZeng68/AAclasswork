/***********************************************************************
Write a function `toFeet(distances)` that takes in an array of distance
strings. The given distances will either be in `feet` or `yards`. The
function should return a new array where all the distances are converted
to feet. There are 3 feet in 1 yard.

Examples:

var arr1 = ['10 feet', '3 yards', '5 yards', '3 feet'];
toFeet(arr1); // => [ '10 feet', '9 feet', '15 feet', '3 feet' ]

var arr2 = ['2 yards', '3 feet', '10 yards'];
toFeet(arr2); // => [ '6 feet', '3 feet', '30 feet' ]
***********************************************************************/
//iterate 
//split the iteration

function toFeet(distances) {
   let distanceInFeet = []

   for (let i = 0; i < distances.length; i++) {
    let distance = distances[i];
    let dis = distance.split(' ');
    let num = dis[0];
    let unit = dis[1];

    if (unit === 'yards') {
        let newUnit = Number(num) * 3
        distanceInFeet.push(newUnit + ' feet')
    } else {
        distanceInFeet.push(distance)
    }
   }
   return distanceInFeet;
}

var arr1 = ['10 feet', '3 yards', '5 yards', '3 feet'];
console.log(toFeet(arr1)); // => [ '10 feet', '9 feet', '15 feet', '3 feet' ]

var arr2 = ['2 yards', '3 feet', '10 yards'];
console.log(toFeet(arr2)); // => [ '6 feet', '3 feet', '30 feet' ]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = toFeet;
