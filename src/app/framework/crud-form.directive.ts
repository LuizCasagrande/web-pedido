import {Directive, Injector} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MessageService} from 'primeng/api';
import {CrudService} from './crud.service';
import {BaseFormDirective} from './base-form.directive';
import {Exception} from '../shared/exception/exception';
import {throttle} from '../shared/decorator/throttle';
import {LoaderService} from '../shared/component/loader/loader.service';
import {finalize} from 'rxjs/operators';

@Directive()
export abstract class CrudFormDirective<T> extends BaseFormDirective {

  objeto = {} as T;
  protected router: Router;
  protected activatedRoute: ActivatedRoute;
  protected messageService: MessageService;
  protected loader: LoaderService;

  protected constructor(protected injector: Injector, protected service: CrudService<T, any>) {
    super();
    this.router = injector.get(Router);
    this.activatedRoute = injector.get(ActivatedRoute);
    this.messageService = injector.get(MessageService);
    this.loader = injector.get(LoaderService);

    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id != null) {
      this.loader.display(true);
      this.service.findById(id)
        .pipe(finalize(() => this.loader.display(false)))
        .subscribe(r => this.objeto = r,
          error => Exception.show(error, this.messageService));
    } else {
      this.postResetForm();
    }
  }

  @throttle(500, true)
  save(): void {
    if (this.form?.valid) {
      this.preSave();
      if (this.preSaveValid()) {
        this.loader.display(true);
        this.service.save(this.objeto)
          .pipe(finalize(() => this.loader.display(false)))
          .subscribe(r => {
            this.changeUrl(r['id']);
            this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Registro salvo'});
            this.objeto = r;
          }, error => Exception.show(error, this.messageService));
      }
    } else {
      this.validate();
    }
  }

  preSave(): void {
  }

  preSaveValid(): boolean {
    return true;
  }

  new(): void {
    this.objeto = {} as T;
    this.form.reset();
    this.changeUrl(null, true);
    this.postResetForm();
  }

  postResetForm(): void {
  }

  changeUrl(id?: number, novo: boolean = false): void {
    let url = this.service.getEndPoint();
    if (id || novo) {
      url = url + `/form${id ? '/' + id : ''}`;
    }
    this.router.navigateByUrl(url).catch();
  }
}
