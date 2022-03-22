import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo/demo.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DemoComponent],
  imports: [CommonModule, BrowserModule, MatSlideToggleModule, FormsModule],
  bootstrap: [DemoComponent],
})
export class BuiltinDirectivesModule {}
