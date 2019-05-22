import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiProvider {

  private apiSAV = 'http://guiasav.diforg.com.br/ws'

  constructor(public http: Http) {}

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

}
