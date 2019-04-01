import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AventalPage } from './avental/avental';
import { ControleAmbientePage } from './controle-ambiente/controle-ambiente';
import { HigieneMaoPage } from './higiene-mao/higiene-mao';
import { ManuseioLuvaEsterilPage } from './manuseio-luva-esteril/manuseio-luva-esteril';
import { MascaraProtetorOcularPage } from './mascara-protetor-ocular/mascara-protetor-ocular';

@IonicPage()
@Component({
  selector: 'page-precaucao-padrao-cat',
  templateUrl: 'precaucao-padrao-cat.html',
})
export class PrecaucaoPadraoCatPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrecaucaoPadraoCatPage');
  }

  aventalClick(){
    this.navCtrl.push(AventalPage);
  }
  controleClick(){
    this.navCtrl.push(ControleAmbientePage);
  }
  higieneClick(){
    this.navCtrl.push(HigieneMaoPage);
  }
  manuseioClick(){
    this.navCtrl.push(ManuseioLuvaEsterilPage);
  }
  mascaraClick(){
    this.navCtrl.push(MascaraProtetorOcularPage);
  }

}
