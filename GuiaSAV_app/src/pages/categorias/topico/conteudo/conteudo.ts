import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ApiProvider } from '../../../../providers/api/api';

@IonicPage()
@Component({
  selector: 'page-conteudo',
  templateUrl: 'conteudo.html',
})
export class ConteudoPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private api: ApiProvider
    ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConteudoPage');
  }

}
