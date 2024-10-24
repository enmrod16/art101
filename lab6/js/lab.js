/*
 * index.js - Lab6
 * Author: Saint Rodriguez
 * Created: 23 October 2024
*/

// Define variables
myTransport = ["Car", "Bus", "Walking"];

//Object for my main ride
myMainRide = {
    make: "Ford",
    model: "Taurus",
    color: "Rusty",
    year: 1995,
    age: function() {
      return 2022 - this.year;
    }
}

//Output
document.writeln("Kinds of transportation I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");

