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
import { EditTweetComponent } from './feed/tweet/edit-tweet/edit-tweet.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    HomeComponent,
    FeedComponent,
    AboutComponent,
    RootComponent,
    TweetComponent,
    EditTweetComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MatToolbarModule,
    RouterModule.forRoot(routes),
    FormsModule,
    MatButtonModule,
  ],
  providers: [TweetService],
  bootstrap: [RootComponent],
})
export class RoutingModule {}
