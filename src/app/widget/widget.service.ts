import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable()
export class WidgetService {

  url = `${environment.api_url}widget`;

  constructor(protected http: HttpClient) {
  }

  getItensMaisVendidos(dataInicial: string): Observable<ItemMaisVendido[]> {
    return this.http.get<ItemMaisVendido[]>(`${this.url}/itens-mais-vendidos?dataInicial=${dataInicial}`);
  }

  getVendasPorCliente(dataInicial: string): Observable<VendaPorCliente[]> {
    return this.http.get<VendaPorCliente[]>(`${this.url}/vendas-por-cliente?dataInicial=${dataInicial}`);
  }

  getColors(): string[] {
    return [
      '#42A5F5',
      '#7E57C2',
      '#EC407A',
      '#FFCA28',
      '#66BB6A',
    ];
  }
}

export interface ItemMaisVendido {

  descricao: string;
  quantidade: number;
}

export interface VendaPorCliente {

  nome: string;
  valor: number;
}
