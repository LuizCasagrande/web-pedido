import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-list-buttons',
  template: `
    <div class="col-12 col-md-6">
      <button (click)="filterEvent.emit()"
              class="p-button-text"
              label="Filtrar"
              pButton
              type="button"></button>
      <button class="p-button-text"
              label="Novo"
              pButton
              routerLink="form"
              type="button"></button>
      <ng-content></ng-content>
    </div>
  `,
})
export class ListButtonsComponent {

  @Output() filterEvent = new EventEmitter<void>();
}
