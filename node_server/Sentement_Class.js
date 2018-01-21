  
require("wise-helper");
// https://www.npmjs.com/package/request
var request = require('request');
// https://www.npmjs.com/package/query-string
var queryString = require('query-string');


class Sentement {
	
	constructor(text_input) {
    	this.data = {};
		this.data.input = text_input; // this is public
	// https://www.npmjs.com/package/query-string

		var valid_encoded_url = queryString.stringify(this.data.input);
		
		this.API_URL = `http://lisent.herokuapp.com/get?${valid_encoded_url}`;
		
		console.log(this.API_URL);
    }

    greet() {
      // Here we can access both name and age
      console.log(`name: ${this.API_URL}`);
    }
  }

module.exports = Sentement;
