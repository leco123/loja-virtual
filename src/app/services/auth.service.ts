import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public token: string;
  constructor(
    private http: HttpClient
  ) { }

  public logar(login: any) {
    const api = environment.api + `/auth`;
    return this.http.post(api, {'email': login.email, 'senha': login.senha});
  }

  public cadastrar() {

  }
}
