import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-list-actions',
  template: `
    <div class="actions">
      <p-button icon="pi pi-pencil"
                routerLink="form/{{id}}"
                styleClass="p-button-link mr-1"></p-button>
      <p-button (onClick)="deleteEvent.emit(id)"
                icon="pi pi-trash"
                styleClass="p-button-link"></p-button>
      <ng-content></ng-content>
    </div>
  `,
})
export class ListActionsComponent {

  @Input() id: number;
  @Output() deleteEvent = new EventEmitter<number>();
}
