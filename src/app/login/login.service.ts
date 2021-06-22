import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable()
export class LoginService {

  url = `${environment.api_url}login`;

  constructor(protected http: HttpClient) {
  }

  getHeader(): string {
    return 'Authorization';
  }

  storeToken(token: string): void {
    return localStorage.setItem(this.getHeader(), token);
  }

  getToken(): string {
    return localStorage.getItem(this.getHeader());
  }

  hasToken(): boolean {
    return this.getToken() != null;
  }

  login(email: string, senha: string): Observable<any> {
    return this.http.post<any>(this.url, {email, senha}, {observe: 'response'});
  }

  logout(): void {
    return localStorage.removeItem(this.getHeader());
  }
}
