import {Injectable} from '@angular/core';
import {CrudService} from '../framework/crud.service';
import {Item} from './item';
import {HttpClient} from '@angular/common/http';
import {ItemFiltro} from './item-filtro';

@Injectable()
export class ItemService extends CrudService<Item, ItemFiltro> {

  constructor(protected http: HttpClient) {
    super(http, 'item');
  }
}
