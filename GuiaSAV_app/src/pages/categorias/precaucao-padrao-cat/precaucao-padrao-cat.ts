import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
    this.navCtrl.push('AventalPage');
  }
  controleClick(){
    this.navCtrl.push('ControleAmbientePage');
  }
  higieneClick(){
    this.navCtrl.push('HigieneMaoPage');
  }
  manuseioClick(){
    this.navCtrl.push('ManuseioLuvaEsterilPage');
  }
  mascaraClick(){
    this.navCtrl.push('MascaraProtetorOcularPage');
  }

}
