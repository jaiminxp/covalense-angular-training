// model
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css'],
})
export class C1Component implements OnInit {
  @ViewChild('heading') heading: ElementRef;

  count: any = 15;

  isDisabled: boolean = false;

  inputValue: string;

  isChecked: boolean = false;

  change(event: any) {
    this.isChecked = event.checked;
    console.log('🚀 ~ this.isChecked', this.isChecked);
  }

  increaseCount() {
    this.count++;
  }

  onType(event: any) {
    this.inputValue = event.target.value;
  }

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => (this.isDisabled = true), 2000);

    setInterval(() => {
      this.isChecked = this.isChecked ? false : true;
    }, 1000);

    setTimeout(() => {
      console.log('🚀 ~ this.heading', this.heading.nativeElement.style);
      this.heading.nativeElement.style.color = 'orange';
    }, 1000);
  }
}
