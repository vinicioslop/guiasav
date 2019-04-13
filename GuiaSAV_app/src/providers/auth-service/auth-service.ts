import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
 
export class User {
  nome: string;
  login: string;
  email: string;
  senha: string;
 
  constructor(nome: string, login: string, email: string, senha: string) {
    this.nome = nome;
    this.login = login;
    this.email = email;
    this.senha = senha;
  }
}
 
@Injectable()
export class AuthService {
  currentUser: User;
 
  public login(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Por favor, insira suas credencias");
    } else {
      return Observable.create(observer => {
        // At this point make a request to your backend to make a real check!
        //let access = (credentials.password === "pass" && credentials.email === "email");
        this.currentUser = new User('Administrador', 'admin', 'admin@admin', 'admin');
        let access = (this.currentUser.login && this.currentUser.senha);
        observer.next(access);
        observer.complete();
      });
    }
  }
 
  public register(credentials) {
    if (credentials.login === null || credentials.senha === null) {
      return Observable.throw("Por favor, insira suas credencias");
    } else {
      // At this point store the credentials to your backend!
      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
      });
    }
  }
 
  public getUserInfo() : User {
    return this.currentUser;
  }
 
  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
}