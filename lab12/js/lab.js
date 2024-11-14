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
        return "Gryffindor: A Gryffindor values 'bravery, daring, nerve, and chivalry." 
    }
    else if (mod == 1) {
        return "Ravenclaw: A Ravenclaw values 'intelligence, knowledge, and wit."
    } 
    else if (mod == 2) {
        return "Slytherin: A Slytherin values 'ambition, cunning, and resourcefulness."
    } 
    else if (mod == 3) {
        return "Hufflepuff: A Hufflepuff values 'hard work, dedication, patience, loyalty, and fair play."
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
