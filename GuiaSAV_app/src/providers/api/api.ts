import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiProvider {

  private apiSAV = 'http://guiasav.diforg.com.br/ws/lista_categoria/'

  constructor(public http: Http) {
    console.log('Hello ApiProvider Provider');
  }

  listaCategorias() {
    return this.http.get(this.apiSAV)
                    .map((data) => {
                      return data.json();
                    });              
  }

  listaTopicos() {
    return this.http.get(this.apiSAV)
                    .map((data) => {
                      return data.json();
                    });              
  }

  listaConteudo() {
    return this.http.get(this.apiSAV)
                    .map((data) => {
                      return data.json();
                    });              
  }

}
