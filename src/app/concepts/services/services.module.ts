import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root/root.component';
import { AddItemComponent } from './add-item/add-item.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ShoppingListService } from './shopping-list.service';
import { LoggerService } from './logger.service';

@NgModule({
  declarations: [RootComponent, AddItemComponent],
  imports: [CommonModule, BrowserModule, FormsModule],
  bootstrap: [RootComponent],
  providers: [ShoppingListService, LoggerService],
})
export class ServicesModule {}
