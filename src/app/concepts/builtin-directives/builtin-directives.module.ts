import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo/demo.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [DemoComponent],
  imports: [CommonModule, BrowserModule],
  bootstrap: [DemoComponent],
})
export class BuiltinDirectivesModule {}
