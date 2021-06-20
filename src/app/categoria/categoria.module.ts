import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoriaService} from './categoria.service';
import {CategoriaListComponent} from './categoria-list.component';
import {CategoriaFormComponent} from './categoria-form.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {PrimengModule} from '../primeng/primeng.module';
import {ListFilterModule} from '../shared/component/list-filter/list-filter.module';
import {ListActionsModule} from '../shared/component/list-actions/list-actions.module';
import {ListButtonsModule} from '../shared/component/list-buttons/list-buttons.module';
import {FormButtonsModule} from '../shared/component/form-buttons/form-buttons.module';
import {DirectiveModule} from '../shared/directive/directive.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    PrimengModule,
    ListFilterModule,
    ListActionsModule,
    ListButtonsModule,
    FormButtonsModule,
    DirectiveModule,
  ],
  declarations: [
    CategoriaListComponent,
    CategoriaFormComponent,
  ],
  exports: [
    CategoriaListComponent,
    CategoriaFormComponent,
  ],
  providers: [
    CategoriaService,
  ],
})
export class CategoriaModule {
}
