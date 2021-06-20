import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormButtonsComponent} from './form-buttons.component';
import {PrimengModule} from '../../../primeng/primeng.module';

@NgModule({
  imports: [
    CommonModule,
    PrimengModule,
  ],
  declarations: [
    FormButtonsComponent,
  ],
  exports: [
    FormButtonsComponent,
  ],
})
export class FormButtonsModule {
}
