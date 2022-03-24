import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css'],
})
export class RootComponent implements OnInit, AfterViewInit {
  constructor() {}

  randomNum: number;

  ngOnInit(): void {
    let id = setInterval(() => (this.randomNum = Math.random()), 1000);

    setTimeout(() => clearInterval(id), 3000);
  }

  ngAfterViewInit(): void {
    console.log('Parent: ngAfterViewInit called');
  }
}
