import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListFilterComponent} from './list-filter.component';
import {PrimengModule} from '../../../primeng/primeng.module';

@NgModule({
  imports: [
    CommonModule,
    PrimengModule,
  ],
  declarations: [
    ListFilterComponent,
  ],
  exports: [
    ListFilterComponent,
  ],
})
export class ListFilterModule {
}
