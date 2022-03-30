import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';
import { FeedComponent } from './feed/feed.component';
import { EditTweetComponent } from './feed/tweet/edit-tweet/edit-tweet.component';
import { TweetComponent } from './feed/tweet/tweet.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuardService } from './services/auth-guard.service';
import { TweetResolverService } from './services/tweet-resolver.service';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'feed',
    component: FeedComponent,
    // canActivate: [AuthGuardService],
    canActivateChild: [AuthGuardService],
    children: [
      {
        path: ':id',
        component: TweetComponent,
        resolve: { tweet: TweetResolverService },
      },
      {
        path: ':id/edit',
        component: EditTweetComponent,
        canDeactivate: [AuthGuardService],
      },
    ],
  },
  // { path: 'feed/:id', component: TweetComponent },
  // { path: 'feed/:id/edit', component: EditTweetComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '**',
    component: ErrorComponent,
    data: { error: '404', message: 'Page not found' },
  },
];
