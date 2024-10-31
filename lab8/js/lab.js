/*
 * index.js - Lab8
 * Author: Saint Rodriguez
 * Created: 30 October 2024
*/

// variables
var numbers = [1, 2, 25, 36];

// squareroot function
function sQuareRoot(x) {
    var results = Math.sqrt(x);
    return results;
}

// testing function
console.log(sQuareRoot(16));
console.log(sQuareRoot(4));

//using map on my array (numbers) to use my sqrt function on
//all the numbers in the array
var squareResults = numbers.map(sQuareRoot);


//changed operation, now subtracts -1
//anon function + results
var subtractResults = numbers.map(function(x) {
    var results = x - 1;
    return results;
})
 
//prints in console
console.log("Array numbers: ", numbers);
console.log("Square roots: ", squareResults);
console.log("Results of numbers -1: ", subtractResults); 
