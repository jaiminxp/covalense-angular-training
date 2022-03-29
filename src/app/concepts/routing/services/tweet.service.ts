import { Injectable } from '@angular/core';
import { Tweet, TWEETS } from '../shared/tweets';

@Injectable({
  providedIn: 'root',
})
export class TweetService {
  tweets = TWEETS;
  constructor() {}

  //read
  getTweets(): Tweet[] {
    return TWEETS;
  }

  //read
  getTweetById(id: number): Tweet {
    return TWEETS.filter((tweet) => tweet.id === id)[0];
  }

  //update
  updateTweet(newTweet: Tweet) {
    let id = newTweet.id;

    let tweet = this.tweets.find((t) => t.id === newTweet.id);

    if (tweet) {
      tweet.caption = newTweet.caption;
    }
  }
}

//CRUD
