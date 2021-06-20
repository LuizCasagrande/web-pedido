import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

export abstract class CrudService<T, Y> {

  private readonly endpoint: string;

  protected constructor(protected http: HttpClient, endpoint: string) {
    this.endpoint = endpoint;
  }

  getEndPoint(): string {
    return this.endpoint;
  }

  getUrl(): string {
    return `${environment.api_url}${this.endpoint}`;
  }

  findAll(pageable?: Pageable): Observable<T[]> {
    const url = `${this.getUrl()}/page?page=${pageable?.page}&size=${pageable?.size}&sort=${pageable?.sort}`;
    return this.http.get<T[]>(pageable != null ? url : this.getUrl());
  }

  findById(id: string): Observable<T> {
    return this.http.get<T>(`${this.getUrl()}/${id}`);
  }

  save(objeto: T): Observable<T> {
    return this.http.post<T>(this.getUrl(), objeto);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.getUrl()}/${id}`);
  }

  complete(query: string): Observable<T[]> {
    return this.http.get<T[]>(`${this.getUrl()}/complete?query=${query}`);
  }

  filter(filtro: Y): Observable<T[]> {
    return this.http.post<T[]>(`${this.getUrl()}/filter`, filtro);
  }
}

export interface Pageable {

  page: number;
  size: number;
  sort: string;
}
