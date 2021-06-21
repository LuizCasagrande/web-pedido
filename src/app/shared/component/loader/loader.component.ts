import {Component} from '@angular/core';
import {LoaderService} from './loader.service';
import {of} from 'rxjs';

@Component({
  moduleId: module.id,
  selector: 'app-loader',
  template: `
    <p-blockUI [blocked]="blocked$ | async">
      <i style="font-size: 2rem" class="pi pi-spin pi-spinner mr-3"></i>
      <span style="font-size: 1.5rem">Carregando...</span>
    </p-blockUI>
  `,
})
export class LoaderComponent {

  blocked$ = of(false);

  constructor(private loaderService: LoaderService) {
    this.blocked$ = this.loaderService.displaySubject.asObservable();
  }
}
