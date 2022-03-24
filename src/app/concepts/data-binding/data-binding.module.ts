import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { C1Component } from './c1/c1.component';
import { BrowserModule } from '@angular/platform-browser';
import { SquarenumComponent } from './squarenum/squarenum.component';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ListItemComponent } from './list-item/list-item.component';

@NgModule({
  declarations: [
    C1Component,
    SquarenumComponent,
    ShoppingListComponent,
    ListItemComponent,
  ],
  imports: [CommonModule, BrowserModule, FormsModule, MatSlideToggleModule],
  bootstrap: [C1Component],
})
export class DataBindingModule {}
