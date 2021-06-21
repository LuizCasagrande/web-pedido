import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class EnderecoService {

  constructor(protected http: HttpClient) {
  }

  buscar(cep: string): Observable<any> {
    const url = `https://brasilapi.com.br/api/cep/v1/${cep}`;
    return this.http.get<any>(url);
  }
}
