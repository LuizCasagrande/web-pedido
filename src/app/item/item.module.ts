import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {ItemService} from './item.service';
import {ItemListComponent} from './item-list.component';
import {ItemFormComponent} from './item-form.component';
import {CategoriaService} from '../categoria/categoria.service';

import {RouterModule} from '@angular/router';

import {PrimengModule} from '../primeng/primeng.module';
import {FormButtonsModule} from '../shared/component/form-buttons/form-buttons.module';
import {DirectiveModule} from '../shared/directive/directive.module';
import {ListButtonsModule} from '../shared/component/list-buttons/list-buttons.module';
import {ListActionsModule} from '../shared/component/list-actions/list-actions.module';
import {ListFilterModule} from '../shared/component/list-filter/list-filter.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    PrimengModule,
    FormButtonsModule,
    DirectiveModule,
    ListButtonsModule,
    ListActionsModule,
    ListFilterModule,
  ],
  declarations: [
    ItemListComponent,
    ItemFormComponent,
  ],
  exports: [
    ItemListComponent,
    ItemFormComponent,
  ],
  providers: [
    ItemService,
    CategoriaService,
  ],
})
export class ItemModule {
}
