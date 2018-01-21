var RSVP = require('rsvp');

var Foobar = require('./Sentement_Class.js');

var test = new Foobar(" roy was here!");
test.get_sentiment();










// function dieToss() {


//   return "works";
// }

// console.log('1');

// var promise = new RSVP.Promise(function(fulfill, reject) {
//   var n = dieToss();
//   if (n === "works") {
//     fulfill(n);
//   } else {
//     reject(n);
//   }
//   console.log('2');
// });

// promise.then(function(toss) {
//   console.log('Yay, threw a ' + toss + '.');  
// }, function(toss) {
//   console.log('Oh, noes, threw a ' + toss + '.');  
// }).then(function(){
// 	console.log("works");
// });

// console.log("")
// console.log('3');