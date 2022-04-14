import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root/root.component';
import { BrowserModule } from '@angular/platform-browser';
import { ShortenPipe } from './shorten-pipe.pipe';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [RootComponent, ShortenPipe, FilterPipe],
  imports: [BrowserModule, CommonModule, FormsModule],
  bootstrap: [RootComponent],
})
export class PipesModule {}
