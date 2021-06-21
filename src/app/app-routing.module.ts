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

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'categoria', component: CategoriaListComponent},
  {path: 'categoria/form', component: CategoriaFormComponent},
  {path: 'categoria/form/:id', component: CategoriaFormComponent},
  {path: 'item', component: ItemListComponent},
  {path: 'item/form', component: ItemFormComponent},
  {path: 'item/form/:id', component: ItemFormComponent},
  {path: 'cliente', component: ClienteListComponent},
  {path: 'cliente/form', component: ClienteFormComponent},
  {path: 'cliente/form/:id', component: ClienteFormComponent},
  {path: 'pedido', component: PedidoListComponent},
  {path: 'pedido/form', component: PedidoFormComponent},
  {path: 'pedido/form/:id', component: PedidoFormComponent},
  {path: '', pathMatch: 'full', redirectTo: 'inicio'},
  {path: '**', pathMatch: 'full', redirectTo: 'inicio'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
