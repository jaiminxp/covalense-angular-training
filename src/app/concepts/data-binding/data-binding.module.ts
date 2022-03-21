import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { C1Component } from './c1/c1.component';
import { BrowserModule } from '@angular/platform-browser';
import { SquarenumComponent } from './squarenum/squarenum.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [C1Component, SquarenumComponent],
  imports: [CommonModule, BrowserModule, FormsModule],
  bootstrap: [C1Component],
})
export class DataBindingModule {}
