import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoggerService } from '../logger.service';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
})
export class AddItemComponent implements OnInit {
  constructor(
    private shoppingListService: ShoppingListService,
    private loggerService: LoggerService
  ) {}

  ngOnInit(): void {}

  addItem(input: HTMLInputElement) {
    this.shoppingListService.addItem(input.value);
  }
}
