import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FeedComponent } from './feed/feed.component';
import { AboutComponent } from './about/about.component';
import { BrowserModule } from '@angular/platform-browser';
import { RootComponent } from './root/root.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { TweetService } from './services/tweet.service';
import { TweetComponent } from './feed/tweet/tweet.component';

@NgModule({
  declarations: [
    HomeComponent,
    FeedComponent,
    AboutComponent,
    RootComponent,
    TweetComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MatToolbarModule,
    RouterModule.forRoot(routes),
  ],
  providers: [TweetService],
  bootstrap: [RootComponent],
})
export class RoutingModule {}
