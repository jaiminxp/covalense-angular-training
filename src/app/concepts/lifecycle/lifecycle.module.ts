import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root/root.component';
import { BrowserModule } from '@angular/platform-browser';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [RootComponent, ChildComponent],
  imports: [CommonModule, BrowserModule],
  bootstrap: [RootComponent],
})
export class LifecycleModule {}
