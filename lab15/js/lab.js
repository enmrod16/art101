/*
 * index.js - Lab 15: AJAX
 * Author: Saint Rodriguez
 * Created: 18 November 2024
*/


// Get the button element by its ID
var button = document.getElementById('activate');

// Add an event listener for the button click
button.addEventListener('click', function() {
    // Make an AJAX GET request using jQuery's $.ajax() method
    $.ajax({
        url: 'https://yesno.wtf/api',  // API endpoint
        type: 'GET',                   // HTTP method (GET request)
        dataType: 'json',              // Expect JSON data as the response
        success: function(data) { 

            // Display the answer 
            $('#answer').html('Answer: ' + data.answer);

            // Display the image 
            var img = $('<img>');                // Create a new <img> element
            img.attr('src', data.image);         // Set the image source to the URL from the API
            img.attr('alt', data.answer);       // Set the alt attribute to the answer ("yes" or "no")
            
            // Append the image to the #image div
            $('#image').empty().append(img);    // Clear any previous content and add the new image
        },
        error: function(xhr, status, error) {
            // This function is executed if the request fails
            console.error('Error fetching data:', status, error);
        }
    });
});

