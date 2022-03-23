import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  shoppingList: string[] = ['Macbook pro', 'Chocolate Milk', 'Gold chain'];

  constructor() {}

  deleteListItem(event: any) {
    this.shoppingList = this.shoppingList.filter((item) => item !== event);
  }

  ngOnInit(): void {}
}
