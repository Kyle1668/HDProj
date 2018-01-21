//Hack davis project for metal health 
//180120
//node server for getting and managing sentiment anallasis
//of facebook posts

//tech used nodejs

require("wise-helper");
var request = require('request');


console.log("Hack davis health app server has started");




request('http://www.google.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});
