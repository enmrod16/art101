/*
 * index.js - Lab11
 * Author: Saint Rodriguez
 * Created: 11 November 2024
*/


function sortString(inputString) {
    return inputString.split('').sort().join('');
}

$("#submit").click(function(){

const userName = $("#user-name").val();

userNameSorted = sortString(userName);

$("#output").html('<div class="text"><p>'+ userNameSorted + '</p></div>');
});
