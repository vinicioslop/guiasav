import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OssoPage } from '../osso/osso';
import { MusculoPage } from '../musculo/musculo';
import { ViaPage } from '../via/via';
import { RegiaoAnatomicaPage } from '../regiao-anatomica/regiao-anatomica';

/**
 * Generated class for the AnatomiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-anatomia',
  templateUrl: 'anatomia.html',
})
export class AnatomiaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnatomiaPage');
  }
  ossoClick(){
    this.navCtrl.push(OssoPage);
  }
  musculoClick(){
    this.navCtrl.push(MusculoPage);
  }
  viaClick(){
    this.navCtrl.push(ViaPage);
  }
  regiao_anatomicaClick(){
    this.navCtrl.push(RegiaoAnatomicaPage);
  }
}
