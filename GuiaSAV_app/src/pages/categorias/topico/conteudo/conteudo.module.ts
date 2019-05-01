import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ConteudoPage } from './conteudo';

@NgModule({
  declarations: [
    ConteudoPage,
  ],
  imports: [
    IonicPageModule.forChild(ConteudoPage),
  ],
  entryComponents: [
    ConteudoPage
  ],
  exports: [
    ConteudoPage
  ]
})
export class ConteudoPageModule {}
