import {NgModule} from '@angular/core';
import {CommonModule, CurrencyPipe, DatePipe} from '@angular/common';
import {ItemWidgetComponent} from './item-widget.component';
import {WidgetService} from './widget.service';
import {CardModule} from 'primeng/card';
import {ChartModule} from 'primeng/chart';
import {ClienteWidgetComponent} from './cliente-widget.component';

@NgModule({
  imports: [
    CommonModule,
    CardModule,
    ChartModule,
  ],
  declarations: [
    ItemWidgetComponent,
    ClienteWidgetComponent,
  ],
  exports: [
    ItemWidgetComponent,
    ClienteWidgetComponent,
  ],
  providers: [
    WidgetService,
    DatePipe,
    CurrencyPipe,
  ],
})
export class WidgetModule {
}
