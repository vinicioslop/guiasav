import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { PrecaucaoPadraoCatPage } from './precaucao_padrao-cat';
import { AventalPage } from './avental/avental';
import { ControleAmbientePage } from './controle-ambiente/controle-ambiente';
import { HigieneMaoPage } from './higiene-mao/higiene-mao';
import { ManuseioLuvaEsterilPage } from './manuseio-luva-esteril/manuseio-luva-esteril';
import { MascaraProtetorOcularPage } from './mascara-protetor-ocular/mascara-protetor-ocular';
import { MaterialPerfuroCortantePage } from './material-perfuro-cortante/material-perfuro-cortante';

@NgModule({
  declarations: [
    PrecaucaoPadraoCatPage,
    AventalPage,
    ControleAmbientePage,
    HigieneMaoPage,
    ManuseioLuvaEsterilPage,
    MascaraProtetorOcularPage,
    MaterialPerfuroCortantePage
  ],
  imports: [
    IonicPageModule.forChild(PrecaucaoPadraoCatPage),
  ],
})
export class PrecaucaoPadraoCatPageModule {}
