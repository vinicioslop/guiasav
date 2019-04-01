import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { PrecaucaoPadraoCatPage } from './precaucao-padrao-cat';
import { AventalPage } from './avental/avental';
import { ControleAmbientePage } from './controle-ambiente/controle-ambiente';
import { HigieneMaoPage } from './higiene-mao/higiene-mao';
import { ManuseioLuvaEsterilPage } from './manuseio-luva-esteril/manuseio-luva-esteril';
import { MascaraProtetorOcularPage } from './mascara-protetor-ocular/mascara-protetor-ocular';

@NgModule({
  declarations: [
    PrecaucaoPadraoCatPage,
    AventalPage,
    ControleAmbientePage,
    HigieneMaoPage,
    ManuseioLuvaEsterilPage,
    MascaraProtetorOcularPage
  ],
  imports: [
    IonicPageModule.forChild(PrecaucaoPadraoCatPage),
  ],
  entryComponents: [
    PrecaucaoPadraoCatPage,
    AventalPage,
    ControleAmbientePage,
    HigieneMaoPage,
    ManuseioLuvaEsterilPage,
    MascaraProtetorOcularPage
  ],
  exports: [
    PrecaucaoPadraoCatPage,
    AventalPage,
    ControleAmbientePage,
    HigieneMaoPage,
    ManuseioLuvaEsterilPage,
    MascaraProtetorOcularPage 
  ],
})
export class PrecaucaoPadraoCatPageModule {}
