import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MusculoPage } from './musculo/musculo';
import { OssoPage } from './osso/osso';
import { RegiaoAnatomicaPage } from './regiao-anatomica/regiao-anatomica';
import { ViaPage } from './via/via';

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
    this.navCtrl.push(MusculoPage);
  }
  ossoClick(){
    this.navCtrl.push(OssoPage);
  }
  regiaoClick(){
    this.navCtrl.push(RegiaoAnatomicaPage);
  }
  viaClick(){
    this.navCtrl.push(ViaPage);
  }
}
