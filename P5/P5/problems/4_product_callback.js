/*******************************************************************************
Write a funtion productCallback(num1, num2, cb) that takes in two numbers and a
callback function. The function should return the result of the callback function
when passed the product of the two numbers.

Examples:

productCallback(-2, 6, Math.abs) // => 12
productCallback(12, 3, Math.sqrt) // => 6
*******************************************************************************/

function productCallback(num1, num2, cb) {
  let product = cb(num1 * num2);
  return product; 
}

console.log(productCallback(-2, 6, Math.abs)) // => 12
console.log(productCallback(12, 3, Math.sqrt)) // => 6

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = productCallback;
