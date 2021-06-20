import {CrudFormDirective} from '../framework/crud-form.directive';
import {Categoria} from './categoria';
import {Component, Injector} from '@angular/core';
import {CategoriaService} from './categoria.service';

@Component({
  moduleId: module.id,
  selector: 'app-categoria-form',
  templateUrl: 'categoria-form.component.html',
})
export class CategoriaFormComponent extends CrudFormDirective<Categoria> {

  constructor(protected injector: Injector, protected service: CategoriaService) {
    super(injector, service);
  }
}
