import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({ selector: '[appClassOnHover]' })
export class ClassOnHoverDirective {
  @Input() appClassOnHover: string;
  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.addClass(this.element.nativeElement, this.appClassOnHover);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeClass(this.element.nativeElement, this.appClassOnHover);
  }
  constructor(private element: ElementRef, private renderer: Renderer2) { }
}
