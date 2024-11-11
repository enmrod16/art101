/*
 * index.js - Lab11
 * Author: Saint Rodriguez
 * Created: 11 November 2024
*/

// function, sorts the string in alphabetical order
function sortString(inputString) {
    return inputString.split('').sort().join('');
}

//buttons and input field
$("#submit").click(function(){
const userName = $("#user-name").val();
userNameSorted = sortString(userName);
$("#output").html('<div class="text"><p>'+ userNameSorted + '</p></div>');
});
