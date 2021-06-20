import {Directive, ElementRef, OnDestroy} from '@angular/core';

@Directive({
  selector: '[appValidation]'
})
export class ValidationDirective implements OnDestroy {

  observer: MutationObserver;

  constructor(el: ElementRef) {
    this.observer = new MutationObserver(() => this.onChange(el.nativeElement));
    this.observer.observe(el.nativeElement, {attributes: true});
  }

  onChange(input: any): void {
    if (input.classList.contains('ng-invalid') && input.classList.contains('ng-dirty')) {
      input.parentElement.style.color = '#A80000';
    } else {
      input.parentElement.style.color = '#333333';
    }
  }

  ngOnDestroy(): void {
    this.observer.disconnect();
  }
}
