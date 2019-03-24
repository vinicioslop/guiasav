import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { DicionarioTermoCatPage } from './dicionario_termo-cat';

@NgModule({
  declarations: [
    DicionarioTermoCatPage,
  ],
  imports: [
    IonicPageModule.forChild(DicionarioTermoCatPage),
  ],
  entryComponents: [
    DicionarioTermoCatPage,
  ],
})
export class DicionarioTermoCatPageModule {}
