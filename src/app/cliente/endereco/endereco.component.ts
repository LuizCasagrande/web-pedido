import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Endereco} from './endereco';
import {BaseFormDirective} from '../../framework/base-form.directive';
import {MessageService} from 'primeng/api';
import {EnderecoService} from './endereco.service';
import {throttle} from '../../shared/decorator/throttle';
import {LoaderService} from '../../shared/component/loader/loader.service';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
})
export class EnderecoComponent extends BaseFormDirective {

  @Input() objeto = new Endereco();
  @Output() objetoChange = new EventEmitter<Endereco>();

  constructor(protected service: EnderecoService,
              private messageService: MessageService,
              private loader: LoaderService) {
    super();
  }

  @throttle(1000, true)
  buscar(): void {
    if (this.objeto.cep?.length > 0) {
      this.loader.display(true);
      this.service.buscar(this.objeto.cep)
        .pipe(finalize(() => this.loader.display(false)))
        .subscribe(r =>
          this.objeto.descricao = `${r['street']} - ${r['neighborhood']} - ${r['city']} - ${r['state']}`, () =>
          this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Não foi possível buscar pelo CEP informado'}));
    } else {
      this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Informe o CEP'});
    }
  }
}
