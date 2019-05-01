import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ApiProvider } from '../../../providers/api/api';

@IonicPage()
@Component({
  selector: 'page-topico',
  templateUrl: 'topico.html',
})
export class TopicoPage {

  topicos: string[];
  id_categoria: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private api: ApiProvider) {
    let id_categoria = navParams.get('id');
    this.saveId(id_categoria);
  }

  ionViewDidLoad() {
    this.listaTopicos();
  }

  saveId(id: number){
    this.id_categoria = id;
  }

  listaTopicos() { 
    this.api.listaTopicos(this.id_categoria)
       .subscribe(
         topicos => this.topicos = topicos);
  }

  conteudoClick(id_cont: number, nm_cont: string, ds_cont: string){
    this.navCtrl.push('ConteudoPage', {
      id: id_cont,
      nome: nm_cont,
      conteudo: ds_cont
    });
  }

}
