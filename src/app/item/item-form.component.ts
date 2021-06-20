import {Component, Injector} from '@angular/core';
import {CrudFormDirective} from '../framework/crud-form.directive';
import {Item} from './item';
import {ItemService} from './item.service';
import {Observable} from 'rxjs';
import {Categoria} from '../categoria/categoria';
import {CategoriaService} from '../categoria/categoria.service';

@Component({
  moduleId: module.id,
  selector: 'app-item-form',
  templateUrl: 'item-form.component.html',
})
export class ItemFormComponent extends CrudFormDirective<Item> {

  categoriaSuggestions$: Observable<Categoria[]>;

  constructor(protected injector: Injector,
              private categoriaService: CategoriaService,
              protected service: ItemService) {
    super(injector, service);
  }

  categoriaComplete($event: any): void {
    this.categoriaSuggestions$ = this.categoriaService.complete($event.query);
  }
}
