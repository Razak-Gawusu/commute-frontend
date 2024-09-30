import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[cmHighlight]',
  standalone: true,
})
export class HighlightDirective {
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  @Input() cmHighlight = '';

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.cmHighlight);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  constructor(private el: ElementRef) {}
}
