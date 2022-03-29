import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TweetService } from '../services/tweet.service';
import { Tweet } from '../shared/tweets';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
})
export class FeedComponent implements OnInit {
  tweets: Tweet[];
  constructor(private tweetService: TweetService, private router: Router) {}

  ngOnInit(): void {
    this.tweets = this.tweetService.getTweets();
  }

  goToTweet(id: number) {
    this.router.navigate(['feed', id], {
      queryParams: { allowEditing: id === 1 ? 1 : 0 },
    });
  }
}
