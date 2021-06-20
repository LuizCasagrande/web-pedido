import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidebarModule} from 'primeng/sidebar';
import {MenuModule} from 'primeng/menu';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {DialogModule} from 'primeng/dialog';
import {InputMaskModule} from 'primeng/inputmask';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {CalendarModule} from 'primeng/calendar';
import {InputNumberModule} from 'primeng/inputnumber';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ToastModule} from 'primeng/toast';

@NgModule({
  exports: [
    CommonModule,
    SidebarModule,
    MenuModule,
    ButtonModule,
    CardModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    DialogModule,
    InputMaskModule,
    AutoCompleteModule,
    CalendarModule,
    InputNumberModule,
    ConfirmDialogModule,
    ToastModule,
  ],
})
export class PrimengModule {
}
