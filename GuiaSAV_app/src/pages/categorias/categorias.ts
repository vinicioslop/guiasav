import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AbreviacaoCatPage } from './abreviacao-cat/abreviacao-cat';
import { AnatomiaCatPage } from './anatomia-cat/anatomia-cat';
import { ContencaoFisicaCatPage } from './contencao-fisica-cat/contencao-fisica-cat';
import { DicionarioTermoCatPage } from './dicionario-termo-cat/dicionario-termo-cat';
import { EquipamentoMonitorizacaoCatPage } from './equipamento-monitorizacao-cat/equipamento-monitorizacao-cat';
import { ExameFisicoGeralCatPage } from './exame-fisico-geral-cat/exame-fisico-geral-cat';
import { FarmacologiaCatPage } from './farmacologia-cat/farmacologia-cat';
import { FormulaCatPage } from './formula-cat/formula-cat';
import { InstrumentoCirurgicoCatPage } from './instrumento-cirurgico-cat/instrumento-cirurgico-cat';
import { PrecaucaoPadraoCatPage } from './precaucao-padrao-cat/precaucao-padrao-cat';
import { VerificacaoSinalVitalCatPage } from './verificacao-sinal-vital-cat/verificacao-sinal-vital-cat';

@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriasPage');
  }

  abreviacaoClick(){
    this.navCtrl.push(AbreviacaoCatPage);
  }
  anatomiaClick(){
    this.navCtrl.push(AnatomiaCatPage);
  }
  contencaoClick(){
    this.navCtrl.push(ContencaoFisicaCatPage);
  }
  dicionarioClick(){
    this.navCtrl.push(DicionarioTermoCatPage);
  }
  equipamentoClick(){
    this.navCtrl.push(EquipamentoMonitorizacaoCatPage);
  }
  exameClick(){
    this.navCtrl.push(ExameFisicoGeralCatPage);
  }
  farmacologiaClick(){
    this.navCtrl.push(FarmacologiaCatPage);
  }
  formulaClick(){
    this.navCtrl.push(FormulaCatPage);
  }
  instrumentoClick(){
    this.navCtrl.push(InstrumentoCirurgicoCatPage);
  }
  precaucaoClick(){
    this.navCtrl.push(PrecaucaoPadraoCatPage);
  }
  verificacaoClick(){
    this.navCtrl.push(VerificacaoSinalVitalCatPage);
  }
}
