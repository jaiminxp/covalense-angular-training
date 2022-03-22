import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
  // encapsulation: ViewEncapsulation.ShadowDom,
})
export class ListItemComponent implements OnInit {
  @Input('itemData') listItem: string;

  constructor() {}

  ngOnInit(): void {}
}
