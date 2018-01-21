//Hack davis project for metal health 
//180120
//node server for getting and managing sentiment anallasis
//of facebook posts

//tech used nodejs

require("wise-helper");
// https://www.npmjs.com/package/request
var request = require('request');
// https://www.npmjs.com/package/query-string
var queryString = require('query-string');

var data = {};

data.input =  "The Last Jedi was the best Star Wars movie ever!";

console.log("Hack davis health app server has started");





var stringified = queryString.stringify(data);
var API_URL = `http://lisent.herokuapp.com/get?${stringified}`;

console.log(stringified);
console.log(API_URL);

request(API_URL, function (error, response, body) {
//todo add error handeling
	var json_returned = JSON.parse(body);
	console.log("Sentament anallasis of setense");
	console.log(`Positive :${json_returned.ppos}%`);
	console.log(`Negative :${json_returned.pneg}%`);
	// console.log(json_returned.pneg);	
  // console.log(body); // Print the HTML for the Google homepage.
});
