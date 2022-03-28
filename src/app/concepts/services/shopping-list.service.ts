import { Injectable, EventEmitter, Output } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  list: string[] = ['Chocolate', 'Milk', 'Bread'];

  @Output() addEvent = new EventEmitter<string>();

  constructor(public loggerService: LoggerService) {}

  getItems(): string[] {
    return this.list;
  }

  addItem(item: string) {
    this.list.push(item);
    this.loggerService.logIt(`Item added to list: ${item}`);

    this.addEvent.emit(item);
  }
}
