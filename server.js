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
var PORT = 3000;
var app = express()

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
app.use('/', express.static('public'));
// app.use(express.static('public/'));

app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}`);
});
console.log("Server Running");