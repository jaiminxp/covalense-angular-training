import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent implements OnInit {
  comments: number = 0;

  pColor: string = 'blue';

  isDark: boolean = false;

  shoppingList: string[] = ['grocery', 'clothes', 'mobile phone'];

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.pColor = Math.random() > 0.5 ? 'green' : 'blue';
    }, 1000);
  }
}
