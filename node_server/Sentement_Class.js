  
require("wise-helper");
// https://www.npmjs.com/package/request
var request = require('request');
// https://www.npmjs.com/package/query-string
var queryString = require('query-string');


class Sentement {
	
	constructor(text_input) {
    	this.data = {};
		var valid_encoded_url = queryString.stringify({input:text_input});
		
		this.API_URL = `http://lisent.herokuapp.com/get?${valid_encoded_url}`;
		
		//console.log(this.API_URL);
    }

    get_sentiment() {
      // Here we can access both name and age
      console.log(`get_sentiment- API_URL: ${this.API_URL}`);
      request(this.API_URL, function (error, response, body) {
		//todo add error handeling
			this.data = JSON.parse(body);
			console.log("\n\n\nSentament anallasis of setense");
			console.log(`Positive :${this.data.ppos}%`);
			console.log(`Negative :${this.data.pneg}%`);
		});

    }
    get_happy(){
    	return this.data.ppos;
    }
  }

module.exports = Sentement;
