import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {ClienteService} from './cliente.service';
import {ClienteListComponent} from './cliente-list.component';
import {ClienteFormComponent} from './cliente-form.component';
import {RouterModule} from '@angular/router';
import {PrimengModule} from '../primeng/primeng.module';
import {ListButtonsModule} from '../shared/component/list-buttons/list-buttons.module';
import {FormButtonsModule} from '../shared/component/form-buttons/form-buttons.module';
import {DirectiveModule} from '../shared/directive/directive.module';
import {ListActionsModule} from '../shared/component/list-actions/list-actions.module';
import {ListFilterModule} from '../shared/component/list-filter/list-filter.module';
import {EnderecoComponent} from './endereco/endereco.component';
import {EnderecoService} from './endereco/endereco.service';
import {PipeModule} from '../shared/pipe/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    PrimengModule,
    ListButtonsModule,
    FormButtonsModule,
    DirectiveModule,
    ListActionsModule,
    ListFilterModule,
    PipeModule,
  ],
  declarations: [
    ClienteListComponent,
    ClienteFormComponent,
    EnderecoComponent,
  ],
  exports: [
    ClienteListComponent,
    ClienteFormComponent,
  ],
  providers: [
    ClienteService,
    EnderecoService,
  ],
})
export class ClienteModule {
}
