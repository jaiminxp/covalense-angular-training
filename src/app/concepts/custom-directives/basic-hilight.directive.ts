import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBasicHilight]',
})
export class BasicHilightDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }
}
