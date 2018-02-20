import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: '[appBasicHighlight]' // if not using [], by default this directive
                                  // acessed as a attribute of html element.
})

export class BasicHighlightDirective implements OnInit {
  // constructor(private elementRef :ElementRef) {}
  // or
  // elementRef :ElementRef;
  // constructor() {}

  constructor(private elementRef :ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}
