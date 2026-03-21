const config = require('./config');
const twit = require('twit');

var T = new twit(config);
var tweetArray = [];
var index = 0;

const params = {
    q: 'startupedmonton',
    count: 10
};

function searchedData(err, data, resp) {
    for (let index = 0; index < data.statuses.length; index++) {
        const tweet = data.statuses[index];
        let tweetbody = {
            'text': tweet.text,
            'userScreenName': tweet.user.screen_name,
            'userImage': tweet.user.profile_image_url_https,
            'userDescription': tweet.user.description,
            'idStr': tweet.id_str,
        }
        tweetArray.push(tweetbody);
    }
}

function loopArray() {
    if (tweetArray.length > index) {
        var currentTweet = tweetArray[index];
        index++;

        let html = "<iframe border=0 frameborder=0 height=550 width=850 src=\"https://twitframe.com/show?url=https%3A%2F%2Ftwitter.com%2F"
            + currentTweet.userScreenName
            + "%2Fstatus%2F"
            + currentTweet.idStr
            + "\"></iframe>"
        $('#content').html(html);
    } else {
        index = 0;
    }
    setTimeout(loopArray, 10000);
}

function runOnLoad() {
    T.get('search/tweets', params, searchedData);
    loopArray();
}

module.exports = {
    runOnLoad,
    loopArray,
    searchedData
}