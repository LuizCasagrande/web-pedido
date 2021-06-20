import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListButtonsComponent} from './list-buttons.component';
import {RouterModule} from '@angular/router';
import {PrimengModule} from '../../../primeng/primeng.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PrimengModule,
  ],
  declarations: [
    ListButtonsComponent,
  ],
  exports: [
    ListButtonsComponent,
  ],
})
export class ListButtonsModule {
}
