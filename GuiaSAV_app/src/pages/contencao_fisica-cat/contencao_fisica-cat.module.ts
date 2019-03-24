import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ContencaoFisicaCatPage } from './contencao_fisica-cat';

@NgModule({
  declarations: [
    ContencaoFisicaCatPage,
  ],
  imports: [
    IonicPageModule.forChild(ContencaoFisicaCatPage),
  ],
  entryComponents: [
    ContencaoFisicaCatPage,
  ],
})
export class ContencaoFisicaCatPageModule {}
