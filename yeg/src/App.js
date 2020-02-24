import React from 'react';
import './App.css';
import { config } from './config.js';

const twit = require('twit');
var T = new twit(config);
var tweetArray = [];
var index = 0;

const params = {
  q: 'startupedmonton',
  count: 10
};

function App() {
  T.get('search/tweets', params, searchedData);
  loopArray();
  return (
    <div className="App">
      <header className="App-header">
        <div className="middle">
            <p id="content">Tweet content should load here shortly!</p>
        </div>
      </header>
    </div>
  );
}

function searchedData(err, data, resp) {
  console.log(data);
  // for (let index = 0; index < data.statuses.length; index++) {
  //     const tweet = data.statuses[index];
  //     let tweetbody = {
  //         'text': tweet.text,
  //         'userScreenName': tweet.user.screen_name,
  //         'userImage': tweet.user.profile_image_url_https,
  //         'userDescription': tweet.user.description,
  //         'idStr': tweet.id_str,
  //     }

  //     // try {
  //     //     if (tweet.entities.media[0].media_url_https) {
  //     //         tweetbody['image'] = tweet.entities.media[0].media_url_https;
  //     //     }
  //     // } catch(e) { }
  //     tweetArray.push(tweetbody);
  // }
}

function loopArray() {
  if (tweetArray.length > index) {
      var currentTweet = tweetArray[index];
      index++;
      var url = document.getElementById('content');

      let html = "<iframe border=0 frameborder=0 height=550 src=\"https://twitframe.com/show?url=https%3A%2F%2Ftwitter.com%2F"
                  + currentTweet.userScreenName 
                  + "%2Fstatus%2F" 
                  + currentTweet.idStr 
                  + "\"></iframe>"

      
      url.html = html;
  } else {
      index = 0;
  }
  setTimeout(loopArray, 10000);
}

export default App;
