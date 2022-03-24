import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    // el.nativeElement.style.backgroundColor = 'yellow';
    this.renderer.setStyle(el.nativeElement, 'background-color', 'transparent');
  }

  @HostListener('mouseenter') addHighlight() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'cyan');
  }

  @HostListener('mouseleave') removeHighlight() {
    this.renderer.setStyle(
      this.el.nativeElement,
      'background-color',
      'transparent'
    );
  }

  @HostListener('click') clickHost() {
    alert('Host was clicked');
  }
}
