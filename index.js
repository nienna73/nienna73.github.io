const config = require('./config');
const twit = require('twit');
const port = process.env.PORT || 3000;
const aws = require('aws-sdk');

var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var ejs = require('ejs');

var tweetArray = [];

app.get('/', function(req, res) {
    // res.sendFile(__dirname + '/index.html');

    T.get('search/tweets', params, searchedData);
    setTimeout(() => {
    res.render("./dash.ejs", {tweets: tweetArray});
    }, 10000);
});

http.listen(port, function() {
    console.log('listening on port ' + port);
})


let conf = {
    access_token: process.env.access_token,
    access_token_secret: process.env.access_token_secret,
    consumer_key: process.env.consumer_key,
    consumer_secret: process.env.consumer_secret
}

var T = new twit(conf);

const params = {
    q: 'edmonton',
    count: 50
};

function searchedData(err, data, resp) {
    for (let index = 0; index < data.statuses.length; index++) {
        const tweet = data.statuses[index];
        let tweetbody = {
            'userScreenName': tweet.user.screen_name,
            'idStr': tweet.id_str,
        }

        tweetArray.push(tweetbody);
    }
}



