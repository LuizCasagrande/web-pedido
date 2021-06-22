import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InicioComponent} from './inicio/inicio.component';
import {CategoriaListComponent} from './categoria/categoria-list.component';
import {CategoriaFormComponent} from './categoria/categoria-form.component';
import {ItemListComponent} from './item/item-list.component';
import {ItemFormComponent} from './item/item-form.component';
import {ClienteListComponent} from './cliente/cliente-list.component';
import {ClienteFormComponent} from './cliente/cliente-form.component';
import {PedidoListComponent} from './pedido/pedido-list.component';
import {PedidoFormComponent} from './pedido/pedido-form.component';
import {AuthGuard} from './guard/auth.guard';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'inicio', component: InicioComponent, canActivate: [AuthGuard]},
  {path: 'categoria', component: CategoriaListComponent, canActivate: [AuthGuard]},
  {path: 'categoria/form', component: CategoriaFormComponent, canActivate: [AuthGuard]},
  {path: 'categoria/form/:id', component: CategoriaFormComponent, canActivate: [AuthGuard]},
  {path: 'item', component: ItemListComponent, canActivate: [AuthGuard]},
  {path: 'item/form', component: ItemFormComponent, canActivate: [AuthGuard]},
  {path: 'item/form/:id', component: ItemFormComponent, canActivate: [AuthGuard]},
  {path: 'cliente', component: ClienteListComponent, canActivate: [AuthGuard]},
  {path: 'cliente/form', component: ClienteFormComponent, canActivate: [AuthGuard]},
  {path: 'cliente/form/:id', component: ClienteFormComponent, canActivate: [AuthGuard]},
  {path: 'pedido', component: PedidoListComponent, canActivate: [AuthGuard]},
  {path: 'pedido/form', component: PedidoFormComponent, canActivate: [AuthGuard]},
  {path: 'pedido/form/:id', component: PedidoFormComponent, canActivate: [AuthGuard]},
  {path: '', pathMatch: 'full', redirectTo: 'inicio'},
  {path: '**', pathMatch: 'full', redirectTo: 'inicio'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
