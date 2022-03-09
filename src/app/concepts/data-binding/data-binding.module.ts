import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { C1Component } from './c1/c1.component';
import { BrowserModule } from '@angular/platform-browser';
import { SquarenumComponent } from './squarenum/squarenum.component';

@NgModule({
  declarations: [C1Component, SquarenumComponent],
  imports: [CommonModule, BrowserModule],
  bootstrap: [C1Component],
})
export class DataBindingModule {}
