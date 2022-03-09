import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-squarenum',
  templateUrl: './squarenum.component.html',
  styleUrls: ['./squarenum.component.css'],
})
export class SquarenumComponent implements OnInit {
  @Input()
  num: any;

  constructor() {}

  ngOnInit(): void {}
}
