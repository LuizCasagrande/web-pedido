import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BlockUIModule} from 'primeng/blockui';
import {LoaderComponent} from './loader.component';

@NgModule({
  imports: [
    CommonModule,
    BlockUIModule,
  ],
  declarations: [
    LoaderComponent,
  ],
  exports: [
    LoaderComponent,
  ],
})
export class LoaderModule {
}
