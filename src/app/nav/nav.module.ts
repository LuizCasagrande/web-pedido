import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavComponent} from './nav.component';
import {ButtonModule} from 'primeng/button';
import {PrimengModule} from '../primeng/primeng.module';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    PrimengModule,
  ],
  declarations: [
    NavComponent
  ],
  exports: [
    NavComponent
  ],
})
export class NavModule {
}
