import {Component, Injector} from '@angular/core';
import {CrudFormDirective} from '../framework/crud-form.directive';
import {Pedido} from './pedido';
import {PedidoService} from './pedido.service';
import {Observable} from 'rxjs';
import {Cliente} from '../cliente/cliente';
import {ClienteService} from '../cliente/cliente.service';
import {throttle} from '../shared/decorator/throttle';

@Component({
  moduleId: module.id,
  selector: 'app-pedido-form',
  templateUrl: './pedido-form.component.html',
})
export class PedidoFormComponent extends CrudFormDirective<Pedido> {

  clienteSuggestions$: Observable<Cliente[]>;

  constructor(protected injector: Injector,
              private clienteService: ClienteService,
              protected service: PedidoService) {
    super(injector, service);
  }

  clienteComplete($event: any): void {
    this.clienteSuggestions$ = this.clienteService.complete($event.query);
  }

  postResetForm(): void {
    this.objeto.dataCadastro = new Date();
    this.objeto.valorTotal = 0;
  }

  @throttle()
  calculaTotal(): void {
    this.objeto.valorTotal = 0;
    this.objeto.valorTotal = this.objeto?.itens
      .map(e => e.quantidade * e.valorUnitario)
      .reduce((a, b) => a + b);
  }
}
