/*
 * index.js - Lab 9: "This simple JavaScript/jQuery script uses buttons to modify some elements.""
 * Author: Saint Rodriguez
 * Created: 4 Novemeber 2024
*/

// add button to challenge section
$("#challenge").append("<button id='button-challenge'>Make Special</button>");

//add a click lsitener to the challenge button
$("button-challenge").click(function(){
        //now add the "special" class to the section
        $("#challenge").toggleClass(".special");
});
