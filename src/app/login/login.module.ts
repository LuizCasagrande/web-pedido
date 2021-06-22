import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginService} from './login.service';
import {LoginComponent} from './login.component';
import {PrimengModule} from '../primeng/primeng.module';
import {FormsModule} from '@angular/forms';
import {DirectiveModule} from '../shared/directive/directive.module';

@NgModule({
  imports: [
    CommonModule,
    PrimengModule,
    FormsModule,
    DirectiveModule,
  ],
  declarations: [
    LoginComponent,
  ],
  exports: [
    LoginComponent,
  ],
  providers: [
    LoginService,
  ],
})
export class LoginModule {
}
