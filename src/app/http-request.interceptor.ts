import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {LoginService} from './login/login.service';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

  constructor(private loginService: LoginService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.loginService.hasToken()) {
      req = req.clone({setHeaders: {authorization: this.loginService.getToken()}});
    }
    return next.handle(req);
  }
}
