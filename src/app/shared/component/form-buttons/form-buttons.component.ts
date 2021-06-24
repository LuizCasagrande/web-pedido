import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-form-buttons',
  template: `
    <div class="col-12 col-md-6">
      <button (click)="newEvent.emit()"
              class="p-button-text"
              label="Novo"
              pButton
              type="button"></button>
      <button (click)="changeUrlEvent.emit()"
              class="p-button-text"
              label="Voltar"
              pButton
              type="button"></button>
      <button (click)="saveEvent.emit()"
              class="p-button-text"
              label="Salvar"
              pButton
              type="button"></button>
      <ng-content></ng-content>
    </div>
  `,
})
export class FormButtonsComponent {

  @Output() saveEvent = new EventEmitter<void>();
  @Output() changeUrlEvent = new EventEmitter<void>();
  @Output() newEvent = new EventEmitter<void>();
}
