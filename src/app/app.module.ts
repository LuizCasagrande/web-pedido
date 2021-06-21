import {DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavModule} from './nav/nav.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {CategoriaModule} from './categoria/categoria.module';
import {ConfirmationService, MessageService} from 'primeng/api';
import {registerLocaleData} from '@angular/common';
import localePt from '@angular/common/locales/pt';
import {ItemModule} from './item/item.module';
import {PrimengModule} from './primeng/primeng.module';
import {ClienteModule} from './cliente/cliente.module';
import {PedidoModule} from './pedido/pedido.module';
import {InicioModule} from './inicio/inicio.module';
import {LoaderModule} from './shared/component/loader/loader.module';
import {LoaderService} from './shared/component/loader/loader.service';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NavModule,
    NgbModule,
    HttpClientModule,
    InicioModule,
    CategoriaModule,
    ItemModule,
    ClienteModule,
    PedidoModule,
    PrimengModule,
    LoaderModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt-BR'},
    {provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL'},
    MessageService,
    ConfirmationService,
    LoaderService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
