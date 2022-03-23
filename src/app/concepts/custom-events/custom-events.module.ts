import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [ParentComponent, ChildComponent],
  imports: [CommonModule, BrowserModule],
  bootstrap: [ParentComponent],
})
export class CustomEventsModule {}
