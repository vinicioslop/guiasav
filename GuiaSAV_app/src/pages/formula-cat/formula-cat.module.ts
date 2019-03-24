import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { FormulaCatPage } from './formula-cat';

@NgModule({
  declarations: [
    FormulaCatPage,
  ],
  imports: [
    IonicPageModule.forChild(FormulaCatPage),
  ],
  entryComponents: [
    FormulaCatPage,
  ],
})
export class FormulaPageCatModule {}
