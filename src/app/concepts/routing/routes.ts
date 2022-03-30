import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FeedComponent } from './feed/feed.component';
import { EditTweetComponent } from './feed/tweet/edit-tweet/edit-tweet.component';
import { TweetComponent } from './feed/tweet/tweet.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'feed',
    component: FeedComponent,
    children: [
      { path: ':id', component: TweetComponent },
      { path: ':id/edit', component: EditTweetComponent },
    ],
  },
  // { path: 'feed/:id', component: TweetComponent },
  // { path: 'feed/:id/edit', component: EditTweetComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];
