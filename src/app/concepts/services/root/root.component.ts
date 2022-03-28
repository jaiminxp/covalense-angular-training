import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css'],
})
export class RootComponent implements OnInit {
  // shoppingListService: ShoppingListService;

  listItems: string[];

  constructor(private shoppingListService: ShoppingListService) {
    // this.shoppingListService = new ShoppingListService();
  }

  ngOnInit(): void {
    this.listItems = this.shoppingListService.getItems();

    this.shoppingListService.addEvent.subscribe((event: string) => {
      console.log('🚀 ~ An Item was added', event);
    });
  }

  alertUser(event: string) {
    alert(`item added: ${event}`);
  }
}
