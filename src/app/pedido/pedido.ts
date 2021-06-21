import {Cliente} from '../cliente/cliente';
import {PedidoItem} from './pedido-item/pedido-item';

export class Pedido {

  id: number;
  dataCadastro: Date;
  cliente: Cliente;
  valorTotal: number;
  itens: PedidoItem[];
}
