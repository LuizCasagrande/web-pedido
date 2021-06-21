import {Component, Injector} from '@angular/core';
import {PedidoItem} from './pedido-item';
import {Observable} from 'rxjs';
import {Categoria} from '../../categoria/categoria';
import {ItemService} from '../../item/item.service';
import {BaseListDirective} from '../../framework/base-list.directive';

@Component({
  moduleId: module.id,
  selector: 'app-pedido-item',
  templateUrl: './pedido-item.component.html',
})
export class PedidoItemComponent extends BaseListDirective<PedidoItem> {

  itemSuggestions$: Observable<Categoria[]>;

  constructor(protected injector: Injector,
              private itemService: ItemService) {
    super(injector);
  }

  itemComplete($event: any): void {
    this.itemSuggestions$ = this.itemService.complete($event.query);
  }
}
