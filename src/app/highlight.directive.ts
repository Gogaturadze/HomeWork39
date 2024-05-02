import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective {
  constructor(private el: ElementRef) {
    // let primaryColor: any = 'green';
    // let secondaryColor: any = 'red';
    // const nativeElement: HTMLElement = this.el.nativeElement;
    // nativeElement.style.backgroundColor = primaryColor;
  }
}
