import {Component, Input} from '@angular/core';
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

  constructor(protected service: EnderecoService,
              private messageService: MessageService,
              private loader: LoaderService) {
    super();
  }

  @throttle(1000, true)
  buscar(): void {
    if (this.objeto.cep?.length === 8) {
      this.loader.display(true);
      this.service.buscar(this.objeto.cep)
        .pipe(finalize(() => this.loader.display(false)))
        .subscribe(r => {
          this.objeto.rua = r['street'];
          this.objeto.bairro = r['neighborhood'];
          this.objeto.cidade = r['city'];
          this.objeto.estado = r['state'];
        }, () => this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Não foi possível buscar pelo CEP informado'}));
    }
  }
}
