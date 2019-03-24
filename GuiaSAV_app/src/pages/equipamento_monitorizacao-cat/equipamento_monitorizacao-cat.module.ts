import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { EquipamentoMonitorizacaoCatPage } from './equipamento_monitorizacao-cat';

@NgModule({
  declarations: [
    EquipamentoMonitorizacaoCatPage,
  ],
  imports: [
    IonicPageModule.forChild(EquipamentoMonitorizacaoCatPage),
  ],
  entryComponents: [
    EquipamentoMonitorizacaoCatPage,
  ],
})
export class EquipamentoMonitorizacaoCatPageModule {}
