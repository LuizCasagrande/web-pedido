import {Directive, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Directive()
export abstract class BaseFormDirective {

  @ViewChild(NgForm) form: NgForm;

  validate(): void {
    for (const c in this.form.controls) {
      if (this.form?.controls[c]) {
        this.form.controls[c].markAsDirty();
        this.form.controls[c].markAsTouched();
        this.form.controls[c].updateValueAndValidity();
      }
    }
  }
}
