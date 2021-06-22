import {Component} from '@angular/core';
import {ConfirmationService, MenuItem} from 'primeng/api';
import {LoginService} from '../login/login.service';
import {Router} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  display = false;
  itens: MenuItem[];

  constructor(private loginService: LoginService,
              private confirmationService: ConfirmationService,
              private router: Router) {
    this.itens = [
      {label: 'Início', icon: 'pi pi-home', routerLink: 'inicio'},
      {label: 'Categoria', icon: 'pi pi-tag', routerLink: 'categoria'},
      {label: 'Item', icon: 'pi pi-dollar', routerLink: 'item'},
      {label: 'Cliente', icon: 'pi pi-user', routerLink: 'cliente'},
      {label: 'Pedido', icon: 'pi pi-shopping-cart', routerLink: 'pedido'},
    ];
  }

  hasToken(): boolean {
    return this.loginService.hasToken();
  }

  logout(): void {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja sair?',
      accept: () => {
        this.loginService.logout();
        this.router.navigateByUrl('login').then(() => this.display = false);
      }
    });
  }
}
