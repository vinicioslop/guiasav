import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiProvider {

  private apiSAV = 'http://guiasav.diforg.com.br/ws'

  constructor(public http: Http) {}

  //métodos do conteúdo
  
  listaCategorias() {
    return this.http.get(this.apiSAV + '/lista_categoria')
                    .map((data) => {
                      return data.json();
                    });              
  }

  listaTopicos(id: number) {
    return this.http.get(this.apiSAV + '/lista_topico/' + id)
                    .map((data) => {
                      return data.json();
                    });              
  }

  //métodos do fórum

  listaForumCat(){
    return this.http.get(this.apiSAV + '/forum')
                    .map((data) => {
                      return data.json();
                    }); 
  }

  listaAssunto(id: number){
    return this.http.get(this.apiSAV + '//' + id)
                    .map((data) => {
                      return data.json();
                    }); 
  }

  listaPostagem(){
    return this.http.get(this.apiSAV + '/')
                    .map((data) => {
                      return data.json();
                    }); 
  }

  listaComentario(){
    return this.http.get(this.apiSAV + '/')
                    .map((data) => {
                      return data.json();
                    }); 
  }

}
