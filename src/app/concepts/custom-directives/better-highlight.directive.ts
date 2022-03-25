import {
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
  HostBinding,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective {
  @HostBinding('style.backgroundColor') backgroundColor = '';

  @Input() highlightColor: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    // el.nativeElement.style.backgroundColor = 'yellow';
    // this.renderer.setStyle(el.nativeElement, 'background-color', 'transparent');

    this.backgroundColor = 'tranparent';
  }

  @HostListener('mouseenter') addHighlight() {
    // this.renderer.setStyle(this.el.nativeElement, 'background-color', 'cyan');
    this.backgroundColor = this.highlightColor;
    console.log('🚀 ~ this.highlightColor', this.highlightColor);
  }

  @HostListener('mouseleave') removeHighlight() {
    // this.renderer.setStyle(
    //   this.el.nativeElement,
    //   'background-color',
    //   'transparent'
    // );

    this.backgroundColor = 'transparent';
  }

  @HostListener('click') clickHost() {
    alert('Host was clicked');
  }
}
