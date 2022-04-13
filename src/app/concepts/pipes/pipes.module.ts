import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root/root.component';
import { BrowserModule } from '@angular/platform-browser';
import { ShortenPipe } from './shorten-pipe.pipe';

@NgModule({
  declarations: [RootComponent, ShortenPipe],
  imports: [BrowserModule, CommonModule],
  bootstrap: [RootComponent],
})
export class PipesModule {}
