import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EquipamentoMonitorizacaoCatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-equipamento-monitorizacao-cat',
  templateUrl: 'equipamento-monitorizacao-cat.html',
})
export class EquipamentoMonitorizacaoCatPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EquipamentoMonitorizacaoCatPage');
  }

}
