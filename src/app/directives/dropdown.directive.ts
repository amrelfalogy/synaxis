import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  constructor(private elRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  toggleOpen(event: Event) {
    const targetElement = event.target as HTMLElement;

    // Check if the click is inside the dropdown element or on a .nav-link
    if (
      this.elRef.nativeElement.contains(event.target) ||
      targetElement.classList.contains('nav-link')
    ) {
      this.isOpen = !this.isOpen;
    } else {
      this.isOpen = false;
    }
  }
}
