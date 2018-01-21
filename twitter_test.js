let Twitter = require('twitter');

let client = new Twitter({
    consumer_key: 'druyAJqFVSsYxvuNfzPCudAIV',
    consumer_secret: 'aVEAn3HWWku7qiqeFbW6VV73ZJ0lr75wBc6saioqiQNPvyZVoD',
    access_token_key: '',
    access_token_secret: ''
});

let twitterHandle = "@BarackObama";
let requestURL = 'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name= ' + twitterHandle + '&tweet_mode=extended&count=100';

client.get(requestURL, {q: 'KyleDevinOBrien'}, function (error, tweets, response) {
    // console.log(tweets);
    // let data = JSON.parse(tweets);
    // console.log(data);



    for (let i = 0; i < tweets.length; i++) {
        console.log(tweets[i].full_text + "\n")
    }

});
