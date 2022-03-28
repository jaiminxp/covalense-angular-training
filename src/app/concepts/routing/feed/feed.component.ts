import { Component, OnInit } from '@angular/core';
import { TweetService } from '../services/tweet.service';
import { Tweet } from '../shared/tweets';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
})
export class FeedComponent implements OnInit {
  tweets: Tweet[];
  constructor(private tweetService: TweetService) {}

  ngOnInit(): void {
    this.tweets = this.tweetService.getTweets();
  }
}
