/*
 * index.js - Lab 9: "This simple JavaScript/jQuery script uses buttons to modify some elements.""
 * Author: Saint Rodriguez
 * Created: 4 Novemeber 2024
*/

// add button to challenge section
$("#challenge").append("<button id='button-challenge'>Make Special</button>");
$("#problems").append("<button id='button-challenge'>Make Special</button>");
$("#results").append("<button id='button-challenge'>Make Special</button>");

//add a click listener to the challenge button
$("button-challenge").click(function(){
        $("#challenge").toggleClass(".special");
        $("#problems").toggleClass(".special");
        $("#results").toggleClass(".special");
});

// click event for each button
$("#challenge, button-challenge").click(function() {
    $("#challenge").toggleClass("special");
})

$("#problems, button-challenge").click(function() {
    $("#problems").toggleClass("special");
})

$("#results, button-challenge").click(function() {
    $("#results").toggleClass("special");
})