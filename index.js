const config = require('./config');
const twit = require('twit');
const port = process.env.PORT || 3000;
const aws = require('aws-sdk');

var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
    T.get('search/tweets', params, searchedData);
});

http.listen(port, function() {
    console.log('listening on port 3000');
})


let conf = {
    access_token: process.env.access_token,
    access_token_secret: process.env.access_token_secret,
    consumer_key: process.env.consumer_key,
    consumer_secret: process.env.consumer_secret
}

var T = new twit(conf);

const params = {
    q: 'startupedmonton',
    count: 10
};

function searchedData(err, data, resp) {
    var tweetArray = [];
    for (let index = 0; index < data.statuses.length; index++) {
        const tweet = data.statuses[index];
        let tweetbody = {
            'userScreenName': tweet.user.screen_name,
            'idStr': tweet.id_str,
        }

        tweetArray.push(tweetbody);
    }
    io.emit('allTweet', tweetArray);
}



