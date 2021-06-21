import {Component, Injector} from '@angular/core';
import {CrudListDirective} from '../framework/crud-list.directive';
import {Pedido} from './pedido';
import {PedidoService} from './pedido.service';
import {PedidoFiltro} from './pedido-filtro';
import {Observable} from 'rxjs';
import {Cliente} from '../cliente/cliente';
import {ClienteService} from '../cliente/cliente.service';

@Component({
  selector: 'app-pedido-list',
  templateUrl: './pedido-list.component.html',
})
export class PedidoListComponent extends CrudListDirective<Pedido, PedidoFiltro> {

  clienteSuggestions$: Observable<Cliente[]>;

  constructor(protected injector: Injector,
              private clienteService: ClienteService,
              protected service: PedidoService) {
    super(injector, service);
  }

  clienteComplete($event: any): void {
    this.clienteSuggestions$ = this.clienteService.complete($event.query);
  }
}
