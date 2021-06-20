import {Component} from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  moduleId: module.id,
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  display = false;
  itens: MenuItem[];

  constructor() {
    this.itens = [
      {label: 'Início', icon: 'pi pi-home', routerLink: 'inicio'},
      {label: 'Categoria', icon: 'pi pi-tag', routerLink: 'categoria'},
      {label: 'Item', icon: 'pi pi-dollar', routerLink: 'item'},
      {label: 'Cliente', icon: 'pi pi-user', routerLink: 'cliente'},
      {label: 'Pedido', icon: 'pi pi-shopping-cart', routerLink: 'pedido'},
    ];
  }
}
