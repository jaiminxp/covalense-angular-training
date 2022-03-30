import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TweetService } from '../../services/tweet.service';
import { Tweet } from '../../shared/tweets';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css'],
})
export class TweetComponent implements OnInit, OnDestroy {
  tweet: Tweet = { id: -1, user: 'user', caption: 'caption' };
  paramsSubscription: Subscription;

  constructor(
    private tweetService: TweetService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.tweet = data['tweet'];
    });

    // let id = +this.route.snapshot.params['id'];
    // this.tweet = this.tweetService.getTweetById(id);
    // this.paramsSubscription = this.route.params.subscribe((params: Params) => {
    //   let id = +params['id'];
    //   this.tweet = this.tweetService.getTweetById(id);
    // });
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }

  editTweet() {
    this.router.navigate(['feed', this.tweet.id, 'edit'], {
      queryParamsHandling: 'preserve',
    });
  }
}
