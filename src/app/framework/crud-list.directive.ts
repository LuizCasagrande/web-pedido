import {Directive, Injector, ViewChild} from '@angular/core';
import {CrudService, Pageable} from './crud.service';
import {ConfirmationService, MessageService} from 'primeng/api';
import {Table} from 'primeng/table';
import {finalize} from 'rxjs/operators';
import {Exception} from '../shared/exception/exception';
import {throttle} from '../shared/decorator/throttle';
import {LoaderService} from '../shared/component/loader/loader.service';

@Directive()
export abstract class CrudListDirective<T, Y> {

  list: T[] = [];
  loading = false;
  records = 0;
  displayFilter = false;
  filtroAplicado = false;
  filtro = {} as Y;
  @ViewChild(Table) table: Table;
  protected messageService: MessageService;
  protected confirmationService: ConfirmationService;
  protected loader: LoaderService;

  protected constructor(protected injector: Injector, protected service: CrudService<T, Y>) {
    this.messageService = injector.get(MessageService);
    this.confirmationService = injector.get(ConfirmationService);
    this.loader = injector.get(LoaderService);
  }

  @throttle()
  load(): void {
    if (!this.filtroAplicado) {
      this.loading = true;
      this.service.findAll(this.getPageable())
        .pipe(finalize(() => this.loading = false))
        .subscribe(r => {
          this.list = r['content'];
          this.records = r['totalElements'];
        }, error => Exception.show(error, this.messageService));
    }
  }

  delete(id: number): void {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja remover?',
      accept: () => {
        this.loader.display(true);
        this.service.delete(id)
          .pipe(finalize(() => this.loader.display(false)))
          .subscribe(() => {
            this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Registro removido'});
            this.load();
          }, error => Exception.show(error, this.messageService));
      }
    });
  }

  filter(): void {
    if (Object.keys(this.filtro).some(k => this.filtro[k] != null)) {
      this.displayFilter = false;
      this.loading = true;
      this.service.filter(this.filtro)
        .pipe(finalize(() => this.loading = false))
        .subscribe(r => {
          this.list = r;
          this.records = r.length;
          this.filtroAplicado = true;
        }, error => Exception.show(error, this.messageService));
    }
  }

  clearFilter(): void {
    this.filtroAplicado = false;
    this.displayFilter = false;
    this.filtro = {} as Y;
    this.load();
  }

  private getPageable(): Pageable {
    if (this.table != null) {
      const size = this.table.rows;
      const page = this.table.first / size;
      let sort = '';
      if (this.table.sortField != null) {
        sort = this.table.sortField + (this.table.sortOrder > 0 ? ',asc' : ',desc');
      }
      return {page, size, sort};
    }
    return null;
  }
}
