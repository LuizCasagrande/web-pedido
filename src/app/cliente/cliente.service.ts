import {Injectable} from '@angular/core';
import {CrudService} from '../framework/crud.service';
import {Cliente} from './cliente';
import {HttpClient} from '@angular/common/http';
import {ClienteFiltro} from './cliente-filtro';

@Injectable()
export class ClienteService extends CrudService<Cliente, ClienteFiltro> {

  constructor(protected http: HttpClient) {
    super(http, 'cliente');
  }
}
