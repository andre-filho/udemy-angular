import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  // bindding to host so it can change properties of the element
  @HostBinding('class.open') isOpen :boolean = false;

  // host listener for listening to DOM events
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  constructor() { }

}
