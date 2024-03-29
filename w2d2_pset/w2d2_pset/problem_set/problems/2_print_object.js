/***********************************************************************
Write a function `printObject(obj)` that prints out all key-value pairs
of an object. HINT: use a for loop.

Example:

var bootcamp = {
 name: 'App Academy',
 color: 'Red',
 population: 120,
};

printObject(bootcamp); // prints

`name - App Academy`
`color - Red`
`population - 120`
***********************************************************************/


function printObject(obj) {
    for (let key in obj) {  //for loop for objects 
        let val = obj[key];  //set our key equal to val
        console.log(key + ' : ' + val);
    }
}

var bootcamp = {
    name: 'App Academy',
    color: 'Red',
    population: 120,
   };

printObject(bootcamp); 

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = printObject;
