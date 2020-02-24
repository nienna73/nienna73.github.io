const config = require('./config');
const twit = require('twit');

var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
    T.get('search/tweets', params, searchedData);
});

http.listen(3000, function() {
    console.log('listening on port 3000');
})

var T = new twit(config);

const params = {
    q: 'startupedmonton',
    count: 10
};

function searchedData(err, data, resp) {
    var tweetArray = [];
    for (let index = 0; index < data.statuses.length; index++) {
        const tweet = data.statuses[index];
        let tweetbody = {
            'text': tweet.text,
            'userScreenName': tweet.user.screen_name,
            'userImage': tweet.user.profile_image_url_https,
            'userDescription': tweet.user.description,
            'idStr': tweet.id_str,
        }

        // try {
        //     if (tweet.entities.media[0].media_url_https) {
        //         tweetbody['image'] = tweet.entities.media[0].media_url_https;
        //     }
        // } catch(e) { }
        tweetArray.push(tweetbody);
    }
    io.emit('allTweet', tweetArray);
}



