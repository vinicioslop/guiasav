import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AnatomiaPage } from '../anatomia/anatomia';
import { AbreviacaoPage } from '../abreviacao/abreviacao';
import { ContencaoFisicaPage } from '../contencao-fisica/contencao-fisica';
import { DicionarioTermoPage } from '../dicionario-termo/dicionario-termo';
import { EquipamentoMonitorizacaoPage } from '../equipamento-monitorizacao/equipamento-monitorizacao';
import { ExameFisicoGeralPage } from '../exame-fisico-geral/exame-fisico-geral';
import { FarmacologiaPage } from '../farmacologia/farmacologia';
import { FormulaPage } from '../formula/formula';
import { InstrumentoCirurgicoPage } from '../instrumento-cirurgico/instrumento-cirurgico';
import { PrecaucaoPadraoPage } from '../precaucao-padrao/precaucao-padrao';
import { VerificacaoSinalVitalPage } from '../verificacao-sinal-vital/verificacao-sinal-vital';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  anatomiaClick(){
    this.navCtrl.push(AnatomiaPage);
  }
  abreviacaoClick(){
    this.navCtrl.push(AbreviacaoPage);
  }
  cont_fisicoClick(){
    this.navCtrl.push(ContencaoFisicaPage);
  }
  dic_termoClick(){
    this.navCtrl.push(DicionarioTermoPage);
  }
  eq_monitorizacaoClick(){
    this.navCtrl.push(EquipamentoMonitorizacaoPage);
  }
  ex_fisicoClick(){
    this.navCtrl.push(ExameFisicoGeralPage);
  }
  farmacologiaClick(){
    this.navCtrl.push(FarmacologiaPage);
  }
  formulaClick(){
    this.navCtrl.push(FormulaPage);
  }
  ins_cirurgicoClick(){
    this.navCtrl.push(InstrumentoCirurgicoPage);
  }
  precaucao_padraoClick(){
    this.navCtrl.push(PrecaucaoPadraoPage);
  }
  ver_sinais_vitaisClick(){
    this.navCtrl.push(VerificacaoSinalVitalPage);
  }
}
