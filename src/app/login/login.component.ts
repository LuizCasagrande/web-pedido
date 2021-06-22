import {Component, OnInit} from '@angular/core';
import {BaseFormDirective} from '../framework/base-form.directive';
import {LoginService} from './login.service';
import {LoaderService} from '../shared/component/loader/loader.service';
import {finalize} from 'rxjs/operators';
import {Router} from '@angular/router';
import {Exception} from '../shared/exception/exception';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
    .login {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center
    }
  `],
})
export class LoginComponent extends BaseFormDirective implements OnInit {

  email: string;
  senha: string;

  constructor(private loginService: LoginService,
              private messageService: MessageService,
              private loader: LoaderService,
              private router: Router) {
    super();
  }

  ngOnInit(): void {
    if (this.loginService.hasToken() && this.router.url.indexOf('/login') === 0) {
      this.router.navigateByUrl('inicio').catch();
    }
  }

  entrar(): void {
    if (this.form.valid) {
      this.loader.display(true);
      this.loginService.login(this.email, this.senha)
        .pipe(finalize(() => this.loader.display(false)))
        .subscribe(r => {
          const token = r.headers.get(this.loginService.getHeader());
          if (token != null) {
            this.loginService.storeToken(token);
            this.router.navigateByUrl('inicio').catch();
          }
        }, error => this.onError(error));
    } else {
      this.validate();
    }
  }

  onError(error: any): void {
    if (403 === error.status) {
      this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Credenciais inválidas'});
    } else {
      Exception.show(error, this.messageService);
    }
  }
}
