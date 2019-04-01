import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the VerificacaoSinalVitalCatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-verificacao-sinal-vital-cat',
  templateUrl: 'verificacao-sinal-vital-cat.html',
})
export class VerificacaoSinalVitalCatPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerificacaoSinalVitalCatPage');
  }

}
