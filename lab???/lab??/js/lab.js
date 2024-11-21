/*
 * index.js - Lab7
 * Author: Saint Rodriguez
 * Created: 28 October 2024
*/

//sortUserName is a function that takes user input and sorts the letters of their name
function sortUserName() {
  var userName = window.prompt("Hi. Please tell me your name so I can fix it.");
  console.log("userName =", userName);
  //splits string to array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  // sorts the array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  //joins array back to a string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  return nameSorted;
}

//output
document.writeln("I've fixed your name: ", sortUserName(), "</br>");