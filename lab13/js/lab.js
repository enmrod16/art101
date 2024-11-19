/*
 * index.js - Lab 13: Loops
 * Author: Saint Rodriguez
 * Created: 18 November 2024
*/

function FizzBuzz() {
    const outputContainer = $("#output");
    outputContainer.empty(); // Clear any previous content

    let table = $("<table></table>");
    let row;
    let cellCount = 0;

    // Loop through numbers 1 to 200
    for (let numCount = 1; numCount <= 200; numCount++) {
        let result = numCount;

        // FizzBuzz logic
        if (numCount % 3 === 0) {
            result += " Fizz!";
        }
        if (numCount % 5 === 0) {
            result += " Buzz!";
        }
        if (numCount % 7 === 0) {
            result += " Boom!";
        }

        // Add a new row every 10 cells
        if (cellCount % 10 === 0) {
            row = $("<tr></tr>");
            table.append(row);
        }

        // Create a cell for the current result and append to the row
        let cell = $("<td></td>").html(result);
        row.append(cell);
        cellCount++;
    }

    // Append the constructed table to the output container
    outputContainer.append(table);
}

$(document).ready(function() {
    FizzBuzz();
});
