import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appToNumber]'
})
export class ToNumberDirective {

  constructor(private el: ElementRef) {

  }

}
