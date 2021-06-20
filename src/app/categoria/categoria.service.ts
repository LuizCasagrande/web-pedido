import {Injectable} from '@angular/core';
import {CrudService} from '../framework/crud.service';
import {Categoria} from './categoria';
import {HttpClient} from '@angular/common/http';
import {CategoriaFiltro} from './categoria-filtro';

@Injectable()
export class CategoriaService extends CrudService<Categoria, CategoriaFiltro> {

  constructor(protected http: HttpClient) {
    super(http, 'categoria');
  }
}
