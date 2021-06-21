import {Component, Injector} from '@angular/core';
import {CrudListDirective} from '../framework/crud-list.directive';
import {Cliente} from './cliente';
import {ClienteService} from './cliente.service';
import {ClienteFiltro} from './cliente-filtro';

@Component({
  moduleId: module.id,
  selector: 'app-cliente-list',
  templateUrl: 'cliente-list.component.html',
})
export class ClienteListComponent extends CrudListDirective<Cliente, ClienteFiltro> {

  constructor(protected injector: Injector, protected service: ClienteService) {
    super(injector, service);
  }
}
