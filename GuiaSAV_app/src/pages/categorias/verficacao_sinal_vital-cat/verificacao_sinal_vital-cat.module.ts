import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { VerificacaoSinalVitalCatPage } from './verificacao_sinal_vital-cat';

@NgModule({
  declarations: [
    VerificacaoSinalVitalCatPage,
  ],
  imports: [
    IonicPageModule.forChild(VerificacaoSinalVitalCatPage),
  ],
  entryComponents: [
    VerificacaoSinalVitalCatPage,
  ],
})
export class VerificacaoSinalVitalCatPageModule {}
