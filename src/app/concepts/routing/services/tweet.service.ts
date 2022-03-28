import { Injectable } from '@angular/core';
import { Tweet, TWEETS } from '../shared/tweets';

@Injectable({
  providedIn: 'root',
})
export class TweetService {
  constructor() {}

  getTweets(): Tweet[] {
    return TWEETS;
  }

  getTweetById(id: number): Tweet {
    return TWEETS.filter((tweet) => tweet.id === id)[0];
  }
}
