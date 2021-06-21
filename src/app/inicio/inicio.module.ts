import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InicioComponent} from './inicio.component';
import {WidgetModule} from '../widget/widget.module';

@NgModule({
  imports: [
    CommonModule,
    WidgetModule,
  ],
  declarations: [
    InicioComponent,
  ],
  exports: [
    InicioComponent,
  ],
})
export class InicioModule {
}
