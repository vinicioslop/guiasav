import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AnatomiaCatPage } from './anatomia-cat/anatomia-cat';
import { AbreviacaoCatPage } from './abreviacao-cat/abreviacao-cat';
import { ContencaoFisicaCatPage } from './contencao_fisica-cat/contencao_fisica-cat';
import { DicionarioTermoCatPage } from './dicionario_termo-cat/dicionario_termo-cat';
import { EquipamentoMonitorizacaoCatPage } from './equipamento_monitorizacao-cat/equipamento_monitorizacao-cat';
import { ExameFisicoGeralCatPage } from './exame_fisico_geral-cat/exame_fisico_geral-cat';
import { FormulaCatPage } from './formula-cat/formula-cat';
import { InstrumentoCirurgicoCatPage } from './intrumento_cirurgico-cat/instrumento_cirurgico-cat';
import { PrecaucaoPadraoCatPage } from './precaucao_padrao-cat/precaucao_padrao-cat';
import { VerificacaoSinalVitalCatPage } from './verficacao_sinal_vital-cat/verificacao_sinal_vital-cat';
import { FarmacologiaCatPage } from './farmacologia-cat/farmacologia-cat';


@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  farmacologiaClick(){
    this.navCtrl.push(FarmacologiaCatPage);
  }
  anatomiaClick(){
    this.navCtrl.push(AnatomiaCatPage);
  }
  abreviacaoClick(){
    this.navCtrl.push(AbreviacaoCatPage);
  }
  cont_fisicoClick(){
    this.navCtrl.push(ContencaoFisicaCatPage);
  }
  dic_termoClick(){
    this.navCtrl.push(DicionarioTermoCatPage);
  }
  eq_monitorizacaoClick(){
    this.navCtrl.push(EquipamentoMonitorizacaoCatPage);
  }
  ex_fisicoClick(){
    this.navCtrl.push(ExameFisicoGeralCatPage);
  }
  formulaClick(){
    this.navCtrl.push(FormulaCatPage);
  }
  ins_cirurgicoClick(){
    this.navCtrl.push(InstrumentoCirurgicoCatPage);
  }
  precaucao_padraoClick(){
    this.navCtrl.push(PrecaucaoPadraoCatPage);
  }
  ver_sinal_vitalClick(){
    this.navCtrl.push(VerificacaoSinalVitalCatPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriasPage');
  }

}
