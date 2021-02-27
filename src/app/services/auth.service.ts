import { Router } from '@angular/router';
import { Login } from './../modules/models/login';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public token: string ='';
  constructor(
    private http: HttpClient
  ) { }

  public logar(login: any) {
    const api = environment.api + `/auth`;
    return this.http.post(api, {'email': login.email, 'senha': login.senha});
  }

  public cadastrar(usuario: Login): Observable<any> {
    const api = environment.api + '/auth/singin';
    return this.http.post(api, {'nome': usuario.nome,'email': usuario.email, 'senha': usuario.senha});
  }
}
