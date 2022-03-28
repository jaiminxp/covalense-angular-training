import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FeedComponent } from './feed/feed.component';
import { TweetComponent } from './feed/tweet/tweet.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'feed', component: FeedComponent },
  { path: 'feed/:id', component: TweetComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
