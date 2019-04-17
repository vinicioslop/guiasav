import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
 
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
  public http: Http;
 
  //rotina de testes
  public login(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Por favor, insira suas credencias");
    } else {
      return Observable.create(observer => {
        this.currentUser = new User('Administrador', 'admin', 'admin@admin', 'admin');
        let access = (this.currentUser.login && this.currentUser.senha);
        observer.next(access);
        observer.complete();
      });
    }
  }

  /*
  public login(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Por favor, insira suas credencias");
    } else {
      return Observable.create(observer => {
        let url = "http://guiasav.diforg.com.br/webservice/";
        this.http.get(url).map(res => res.json()).subscribe(
          data => {
            if (data.status === "200"){
              this.currentUser = new User(data.nome, data.login, data.email, data.senha);
              observer.next(true);
              observer.complete();
            } else {
              observer.next(false);
              observer.complete();
            }
          });
      }
    }
  }
  */
 
  //rotina de testes
  public register(credentials) {
    if (credentials.nome === null || credentials.login === null || credentials.email === null || credentials.senha === null) {
      return Observable.throw("Por favor, insira suas credencias");
    } else {
      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
      });
    }
  }

  /* Essa rotina provavelmente funciona, falta apenas pequenos ajustes
  public register(credentials) {
    if (credentials.nome === null || credentials.login === null || credentials.email === null || credentials.senha === null) {
      return Observable.throw("Por favor, insira suas credencias");
    } else {
      return Observable.create(observer => {
        this.http.get('url?nome'+credentials.nome+'&login='+credentials.login+'&email='+credentials.email+'&password='+credentials.password)
        .map(res => res.json())
        .subscribe(data =>
        {
          console.log(data)//you can format the response from your server
          observer.next(data );//and then return data
          observer.complete();
        });
      });
    }
  }
  */
 
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