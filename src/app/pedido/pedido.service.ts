import {Injectable} from '@angular/core';
import {CrudService} from '../framework/crud.service';
import {Pedido} from './pedido';
import {HttpClient} from '@angular/common/http';
import {PedidoFiltro} from './pedido-filtro';

@Injectable()
export class PedidoService extends CrudService<Pedido, PedidoFiltro> {

  constructor(protected http: HttpClient) {
    super(http, 'pedido');
  }
}
