import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InicioComponent} from './inicio/inicio.component';
import {CategoriaListComponent} from './categoria/categoria-list.component';
import {CategoriaFormComponent} from './categoria/categoria-form.component';
import {ItemListComponent} from './item/item-list.component';
import {ItemFormComponent} from './item/item-form.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'categoria', component: CategoriaListComponent},
  {path: 'categoria/form', component: CategoriaFormComponent},
  {path: 'categoria/form/:id', component: CategoriaFormComponent},
  {path: 'item', component: ItemListComponent},
  {path: 'item/form', component: ItemFormComponent},
  {path: 'item/form/:id', component: ItemFormComponent},
  {path: '', pathMatch: 'full', redirectTo: 'inicio'},
  {path: '**', pathMatch: 'full', redirectTo: 'inicio'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
