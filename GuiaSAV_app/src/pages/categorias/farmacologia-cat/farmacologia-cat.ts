import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  principalClick(){
    this.navCtrl.push('PrincipalFarmacoPage');
  }
  viaAplicacaoClick(){
    this.navCtrl.push('ViaAplicacaoPage');
  }
}
