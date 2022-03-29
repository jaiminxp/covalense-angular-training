import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router';
import { TweetService } from '../../../services/tweet.service';
import { Tweet } from '../../../shared/tweets';

@Component({
  selector: 'app-edit-tweet',
  templateUrl: './edit-tweet.component.html',
  styleUrls: ['./edit-tweet.component.css'],
})
export class EditTweetComponent implements OnInit {
  tweet: Tweet = { id: -1, user: '', caption: '' };
  isAllowedToEdit: boolean = false;

  constructor(
    private tweetService: TweetService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    // let id = parseInt(this.route.snapshot.params['id']);

    this.tweet = this.tweetService.getTweetById(id);

    //query params
    let allowEditing = +this.route.snapshot.queryParams['allowEditing'];
    this.isAllowedToEdit = allowEditing === 1 ? true : false;
  }

  onUpdateTweet() {
    this.tweetService.updateTweet(this.tweet);
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
