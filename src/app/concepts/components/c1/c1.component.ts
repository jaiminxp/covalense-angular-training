import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c1',
  // selector: '.app-c1',
  // selector: '#app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css'],
  // template: `<h1>this is an inline template</h1>
  //   <p>i am a para</p>`,

  // styles: [
  //   `
  //     h1 {
  //       color: yellow;
  //     }
  //   `,
  // ],
})
export class C1Component implements OnInit {
  inputValue: string;
  constructor() {}

  ngOnInit(): void {}

  onClick(input: HTMLInputElement) {
    this.inputValue = input.value;
    // heading.innerText = 'I am a heading';
  }
}
