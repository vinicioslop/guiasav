import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PrincipalFarmacoPage } from '../principal-farmaco/principal-farmaco';
import { ViaAplicacaoPage } from '../via-aplicacao/via-aplicacao';

/**
 * Generated class for the FarmacologiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-farmacologia',
  templateUrl: 'farmacologia.html',
})
export class FarmacologiaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FarmacologiaPage');
  }
  principal_farmacoClick(){
    this.navCtrl.push(PrincipalFarmacoPage);
  }
  via_aplicacaoClick(){
    this.navCtrl.push(ViaAplicacaoPage);
  }
}
