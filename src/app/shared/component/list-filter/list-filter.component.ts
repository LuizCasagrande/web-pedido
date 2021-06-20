import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-list-filter',
  template: `
    <p-dialog [(visible)]="display"
              [closable]="false"
              [closeOnEscape]="false"
              [style]="{width: '400px'}"
              header="Filtro">
      <div class="container">
        <div class="row">
          <ng-content></ng-content>
        </div>
      </div>
      <p-footer>
        <button (click)="clearFilterEvent.emit()"
                class="p-button-text"
                label="Cancelar"
                pButton
                type="button"></button>
        <button (click)="filterEvent.emit()"
                class="p-button-text"
                label="Filtrar"
                pButton
                type="button"></button>
      </p-footer>
    </p-dialog>
  `,
})
export class ListFilterComponent {

  @Input() display = false;
  @Output() filterEvent = new EventEmitter<void>();
  @Output() clearFilterEvent = new EventEmitter<void>();
}
