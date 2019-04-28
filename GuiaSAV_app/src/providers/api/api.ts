import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiProvider {

  private apiSAV_categoria = 'http://guiasav.diforg.com.br/ws/lista_categoria/'
  private apiSAV_topico = 'http://guiasav.diforg.com.br/ws/lista_categoria/'
  private apiSAV_conteudo = 'http://guiasav.diforg.com.br/ws/lista_categoria/'

  constructor(public http: Http) {
    console.log('Hello ApiProvider Provider');
  }

  listaCategorias() {
    return this.http.get(this.apiSAV_categoria)
                    .map((data) => {
                      return data.json();
                    });              
  }

  listaTopicos() {
    return this.http.get(this.apiSAV_topico)
                    .map((data) => {
                      return data.json();
                    });              
  }

  listaConteudo() {
    return this.http.get(this.apiSAV_conteudo)
                    .map((data) => {
                      return data.json();
                    });              
  }

}
