import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { FarmacologiaCatPage } from './farmacologia-cat';

import { PrincipalFarmacoPage } from './principal-farmaco/principal-farmaco';
import { ViaAplicacaoPage } from './via-aplicacao/via-aplicacao';

@NgModule({
  declarations: [
    FarmacologiaCatPage,
    PrincipalFarmacoPage,
    ViaAplicacaoPage,
  ],
  imports: [
    IonicPageModule.forChild(FarmacologiaCatPage),
  ],
  entryComponents: [
    FarmacologiaCatPage,
    PrincipalFarmacoPage,
    ViaAplicacaoPage,
  ],
  exports: [
    FarmacologiaCatPage,
    PrincipalFarmacoPage,
    ViaAplicacaoPage,
  ],
})
export class FarmacologiaCatPageModule {}
