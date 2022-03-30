import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Tweet } from '../shared/tweets';
import { TweetService } from './tweet.service';

@Injectable({
  providedIn: 'root',
})
export class TweetResolverService implements Resolve<Tweet> {
  constructor(private tweetService: TweetService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Tweet | Observable<Tweet> | Promise<Tweet> {
    let id = +route.params['id'];
    let tweet = this.tweetService.getTweetById(id);
    return tweet;
  }
}
