import {BaseFormDirective} from './base-form.directive';
import {Directive, EventEmitter, Injector, Input, Output} from '@angular/core';
import {ConfirmationService} from 'primeng/api';

@Directive()
export abstract class BaseListDirective<T> extends BaseFormDirective {

  @Input() list: T[];
  @Output() listChange = new EventEmitter<T[]>();
  visible = false;
  objeto = {} as T;
  indexEditando: number = null;
  protected confirmationService: ConfirmationService;

  protected constructor(protected injector: Injector) {
    super();
    this.confirmationService = injector.get(ConfirmationService);
  }

  save(): void {
    this.list = this.list || [];
    this.preSave();
    if (this.form.valid) {
      const index = this.indexEditando ?? this.list.length;
      this.list[index] = this.objeto;
      this.listChange.emit(this.list);
      this.reset();
    } else {
      this.validate();
    }
  }

  preSave(): void {
  }

  update(rowData: T): void {
    this.indexEditando = this.list.indexOf(rowData);
    this.objeto = JSON.parse(JSON.stringify(rowData));
    this.visible = true;
  }

  delete(rowData: T): void {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja remover?',
      accept: () => {
        this.list = this.list.filter(e => rowData !== e);
        this.listChange.emit(this.list);
      }
    });
  }

  reset(): void {
    this.visible = false;
    this.indexEditando = null;
    this.objeto = {} as T;
    this.form.reset();
  }
}
