import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  // encapsulation: ViewEncapsulation.None,
})
export class ShoppingListComponent implements OnInit {
  constructor() {}

  shoppingData: string[] = ['grocery', 'clothes', 'mobile phone'];

  ngOnInit(): void {}
}
