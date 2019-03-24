import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { AbreviacaoCatPage } from './abreviacao-cat';

@NgModule({
  declarations: [
    AbreviacaoCatPage,
  ],
  imports: [
    IonicPageModule.forChild(AbreviacaoCatPage),
  ],
  entryComponents: [
    AbreviacaoCatPage,
  ],
})
export class AbreviacaoCatPageModule {}
