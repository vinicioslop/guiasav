import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-anatomia-cat',
  templateUrl: 'anatomia-cat.html',
})
export class AnatomiaCatPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnatomiaCatPage');
  }

  musculoClick(){
    this.navCtrl.push('MusculoPage');
  }
  ossoClick(){
    this.navCtrl.push('OssoPage');
  }
  regiaoClick(){
    this.navCtrl.push('RegiaoAnatomicaPage');
  }
  viaClick(){
    this.navCtrl.push('ViaPage');
  }
}
