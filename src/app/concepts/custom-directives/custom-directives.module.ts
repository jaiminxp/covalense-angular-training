import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicHilightDirective } from './basic-hilight.directive';
import { C1Component } from './c1/c1.component';
import { BrowserModule } from '@angular/platform-browser';
import { BetterHighlightDirective } from './better-highlight.directive';

@NgModule({
  declarations: [BasicHilightDirective, C1Component, BetterHighlightDirective],
  imports: [CommonModule, BrowserModule],
  bootstrap: [C1Component],
})
export class CustomDirectivesModule {}
