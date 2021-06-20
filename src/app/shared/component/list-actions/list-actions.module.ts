import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListActionsComponent} from './list-actions.component';
import {RouterModule} from '@angular/router';
import {PrimengModule} from '../../../primeng/primeng.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PrimengModule,
  ],
  declarations: [
    ListActionsComponent,
  ],
  exports: [
    ListActionsComponent,
  ],
})
export class ListActionsModule {
}
