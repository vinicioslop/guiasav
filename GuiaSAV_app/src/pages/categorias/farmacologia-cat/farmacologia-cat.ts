import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PrincipalFarmacoPage } from './principal-farmaco/principal-farmaco';
import { ViaAplicacaoPage } from './via-aplicacao/via-aplicacao';

/**
 * Generated class for the FarmacologiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-farmacologia-cat',
  templateUrl: 'farmacologia-cat.html',
})
export class FarmacologiaCatPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FarmacologiaCatPage');
  }
  principal_farmacoClick(){
    this.navCtrl.push(PrincipalFarmacoPage);
  }
  via_aplicacaoClick(){
    this.navCtrl.push(ViaAplicacaoPage);
  }
}
