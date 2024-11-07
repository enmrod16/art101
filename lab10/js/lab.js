/*
 * index.js - Lab 10: "This simple JavaScript/jQuery script appends new elements to an output div."
 * Author: Saint Rodriguez
 * Created: 6 Novemeber 2024
*/

// helper function
function generateRandomText() {
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    const min = 3;
    const max = 100;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
// Get a random starting index to slice the Lorem Ipsum text
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
// Generate the random Lorem Ipsum-like text
    return text.slice(randStart, randStart + randLen);
}

// event listener for my button
$("#make-convo").click(function(){
    const newText = generateRandomText();
    $("#output").append('<div class="textmessage"><p>'+ newText + '</p><div>');
    $("#output").append('<p></p>'); 
    // ^^ adds a new line after inline element
});