/*
 * index.js - Lab 12 Conditionals
 * Author: Saint Rodriguez
 * Created: 14 November 2024
*/

// Return Gryffindor, Revenclaw, Slytherin, and Hufflepuff
// Depending on length mod 4
function sortingHat(str) {
    len = str.length;
    mod = len % 4;
    if (mod == 0) {
        return "Gryffindor" 
    }
    else if (mod == 1) {
        return "Ravenclaw"
    } 
    else if (mod == 2) {
        return "Slytherin"
    } 
    else if (mod == 3) {
        return "Hufflepuff"
    }
}


//buttons and event listener
var myButton = document.getElementById("submit");
myButton.addEventListener("click", function(){
    var name = document.getElementById("input").value;
    var house = sortingHat(name);
    newText = "<p> The Sorting hat has sorted you into " + house + "</p>";
    document.getElementById("output").innerHTML = newText;
})
