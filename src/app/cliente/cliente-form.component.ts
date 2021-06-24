import {CrudFormDirective} from '../framework/crud-form.directive';
import {Cliente} from './cliente';
import {Component, Injector, ViewChild} from '@angular/core';
import {ClienteService} from './cliente.service';
import {EnderecoComponent} from './endereco/endereco.component';
import {Endereco} from './endereco/endereco';

@Component({
  moduleId: module.id,
  selector: 'app-cliente-form',
  templateUrl: 'cliente-form.component.html',
})
export class ClienteFormComponent extends CrudFormDirective<Cliente> {

  @ViewChild(EnderecoComponent) enderecoComponent: EnderecoComponent;

  constructor(protected injector: Injector, protected service: ClienteService) {
    super(injector, service);
  }

  postResetForm(): void {
    this.objeto.endereco = new Endereco();
    this.enderecoComponent?.form.reset();
  }

  validate(): void {
    super.validate();
    this.enderecoComponent?.validate();
  }

  isValid(): boolean {
    return super.isValid() && this.enderecoComponent?.isValid();
  }
}
