import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavComponent} from './nav.component';
import {ButtonModule} from 'primeng/button';
import {SidebarModule} from 'primeng/sidebar';
import {MenuModule} from 'primeng/menu';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    SidebarModule,
    MenuModule,
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
