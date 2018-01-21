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
var express = require('express');
var PORT = 8080;
var app = express();
var pass = require("path");

function getHashtag(hash){
    return hash.params.hashtag;
}

// users/:userId/books/:bookId
app.get('/twitter/:hashtag', function (req, res) {
    res.send(req.params.hashtag)
    console.log(getHashtag(req));
});


// app.get('/'function (req, res) {
//     return
// });
app.use(express.static(__dirname + '/public'));
// app.use(express.static(path.join(__dirname, 'public')));


app.listen(PORT, function () {
    console.log(`Running on address \nhttp://localhost:${PORT}/`);
});
console.log("Server Running");