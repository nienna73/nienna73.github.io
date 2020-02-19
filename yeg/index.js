var io = require('socket.io')();

const config = require('./config');
const twit = require('twit');

var T = new twit(config);

const params = {
    q: 'startupedmonton',
    count: 100
};

function searchedData(err, data, resp) {
    var tweetArray = [];
    for (let index = 0; index < data.statuses.length; index++) {
        const tweet = data.statuses[index];
        let tweetbody = {
            'text': tweet.text,
            'userScreenName': "@" + tweet.user.screen_name,
            'userImage': tweet.user.profile_image_url_https,
            'userDescription': tweet.user.description,
        }

        try {
            if (tweet.entities.media[0].media_url_https) {
                tweetbody['image'] = tweet.entities.media[0].media_url_https;
            }
        } catch(e) { }
        tweetArray.push(tweetbody);
    }
    io.emit('allTweet', tweetArray);
    // console.log(tweetArray);
}

T.get('search/tweets', params, searchedData);

