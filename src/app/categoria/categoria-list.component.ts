import {CrudListDirective} from '../framework/crud-list.directive';
import {Categoria} from './categoria';
import {Component, Injector} from '@angular/core';
import {CategoriaService} from './categoria.service';
import {CategoriaFiltro} from './categoria-filtro';

@Component({
  moduleId: module.id,
  selector: 'app-categoria-list',
  templateUrl: 'categoria-list.component.html',
})
export class CategoriaListComponent extends CrudListDirective<Categoria, CategoriaFiltro> {

  constructor(protected injector: Injector, protected service: CategoriaService) {
    super(injector, service);
  }
}
