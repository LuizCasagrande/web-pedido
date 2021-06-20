import {Component, Injector} from '@angular/core';
import {CrudListDirective} from '../framework/crud-list.directive';
import {Item} from './item';
import {ItemService} from './item.service';
import {ItemFiltro} from './item-filtro';
import {CategoriaService} from '../categoria/categoria.service';
import {Observable} from 'rxjs';
import {Categoria} from '../categoria/categoria';

@Component({
  moduleId: module.id,
  selector: 'app-item-list',
  templateUrl: 'item-list.component.html',
})
export class ItemListComponent extends CrudListDirective<Item, ItemFiltro> {

  categoriaSuggestions$: Observable<Categoria[]>;

  constructor(protected injector: Injector,
              private categoriaService: CategoriaService,
              protected service: ItemService) {
    super(injector, service);
  }

  categoriaComplete($event): void {
    this.categoriaSuggestions$ = this.categoriaService.complete($event.query);
  }
}
