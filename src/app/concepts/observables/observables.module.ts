import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root/root.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLinkWithHref, RouterModule } from '@angular/router';
import { routes } from './routes';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [RootComponent, HomeComponent, AboutComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
  ],
  bootstrap: [RootComponent],
})
export class ObservablesModule {}
