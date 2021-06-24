import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {PedidoService} from './pedido.service';
import {PedidoListComponent} from './pedido-list.component';
import {PedidoFormComponent} from './pedido-form.component';
import {ClienteService} from '../cliente/cliente.service';
import {RouterModule} from '@angular/router';
import {PedidoItemComponent} from './pedido-item/pedido-item.component';
import {ItemService} from '../item/item.service';
import {PrimengModule} from '../primeng/primeng.module';
import {DirectiveModule} from '../shared/directive/directive.module';
import {FormButtonsModule} from '../shared/component/form-buttons/form-buttons.module';
import {ListButtonsModule} from '../shared/component/list-buttons/list-buttons.module';
import {ListActionsModule} from '../shared/component/list-actions/list-actions.module';
import {ListFilterModule} from '../shared/component/list-filter/list-filter.module';
import {PipeModule} from '../shared/pipe/pipe.module';
import {CepPipe} from '../shared/pipe/cep.pipe';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    PrimengModule,
    DirectiveModule,
    FormButtonsModule,
    ListButtonsModule,
    ListActionsModule,
    ListFilterModule,
    PipeModule,
  ],
  declarations: [
    PedidoListComponent,
    PedidoFormComponent,
    PedidoItemComponent,
  ],
  exports: [
    PedidoListComponent,
    PedidoFormComponent,
    PedidoItemComponent,
  ],
  providers: [
    PedidoService,
    ClienteService,
    ItemService,
    CepPipe,
  ],
})
export class PedidoModule {
}
