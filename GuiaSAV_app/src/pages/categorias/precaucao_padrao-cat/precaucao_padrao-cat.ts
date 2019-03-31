import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HigieneMaoPage } from './higiene-mao/higiene-mao';
import { MascaraProtetorOcularPage } from './mascara-protetor-ocular/mascara-protetor-ocular';
import { AventalPage } from './avental/avental';
import { ControleAmbientePage } from './controle-ambiente/controle-ambiente';
import { MaterialPerfuroCortantePage } from './material-perfuro-cortante/material-perfuro-cortante';
import { ManuseioLuvaEsterilPage } from './manuseio-luva-esteril/manuseio-luva-esteril';

/**
 * Generated class for the PrecaucaoPadraoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-precaucao_padrao-cat',
  templateUrl: 'precaucao_padrao-cat.html',
})
export class PrecaucaoPadraoCatPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrecaucaoPadraoCatPage');
  }
  hig_maoClick(){
    this.navCtrl.push(HigieneMaoPage);
  }
  mas_prot_ocularClick(){
    this.navCtrl.push(MascaraProtetorOcularPage);
  }
  aventalClick(){
    this.navCtrl.push(AventalPage);
  }
  con_ambienteClick(){
    this.navCtrl.push(ControleAmbientePage);
  }
  mat_perf_cortanteClick(){
    this.navCtrl.push(MaterialPerfuroCortantePage);
  }
  manuseio_luvas_esterilClick(){
    this.navCtrl.push(ManuseioLuvaEsterilPage);
  }
}
