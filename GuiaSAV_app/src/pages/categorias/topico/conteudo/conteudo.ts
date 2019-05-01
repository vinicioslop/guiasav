import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ApiProvider } from '../../../../providers/api/api';

@IonicPage()
@Component({
  selector: 'page-conteudo',
  templateUrl: 'conteudo.html',
})
export class ConteudoPage {

  id_conteudo: number;
  nome_conteudo: string;
  txt_conteudo: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private api: ApiProvider) {
    let id = navParams.get('id');
    let nome = navParams.get('nome');
    let conteudo = navParams.get('conteudo');
    this.save(id, nome, conteudo);
  }

  ionViewDidLoad() {}

  save(id: number, nome: string, conteudo: string){
    this.id_conteudo = id;
    this.nome_conteudo = nome;
    this.txt_conteudo = conteudo;
  }

}
