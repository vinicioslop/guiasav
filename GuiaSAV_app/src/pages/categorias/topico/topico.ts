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

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private api: ApiProvider
    ) {}

  ionViewDidLoad() {
    this.listaTopicos();
  }

  conteudoClick(){
    this.navCtrl.push('ConteudoPage');
  }

  listaTopicos() {
    this.api.listaTopicos()
       .subscribe(
         topicos => this.topicos = topicos);
  }

}
