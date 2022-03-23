import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() listItem: string;

  @Output() deleteEvent = new EventEmitter<string>();
  constructor() {}

  deleteItem() {
    this.deleteEvent.emit(this.listItem);
  }

  ngOnInit(): void {}
}
