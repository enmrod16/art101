/*
 * index.js - Lab 16: JSON and APIs
 * Author: Saint Rodriguez
 * Created: 02 December 2024
*/

$.ajax({
    url: "https://api.allorigins.win/get?url=" + encodeURIComponent("https://xkcd.com/info.0.json"),
    type: "GET",
    dataType: "json",
    success: function(data) {
        // The actual comic data is wrapped inside 'contents' when using a proxy
        const comicData = JSON.parse(data.contents); // Parsing the JSON content
        console.log(comicData);

        // Extract comic details
        const comicTitle = comicData.title;
        const comicImage = comicData.img;
        const comicAltText = comicData.alt;

        // Construct HTML to display comic
        const comicHtml = `
            <h2>${comicTitle}</h2>
            <img src="${comicImage}" alt="${comicAltText}" />
            <p>${comicAltText}</p>
        `;
        
        // Insert into the container
        $('#comic-container').html(comicHtml);
    },
    error: function(jqXHR, textStatus, errorThrown) {
        console.log("Error:", textStatus, errorThrown);
        $('#comic-container').html('<p>Failed to load comic.</p>');
    }
});
