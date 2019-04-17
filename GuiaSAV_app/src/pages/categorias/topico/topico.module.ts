import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { TopicoPage } from './topico';
import { ConteudoPage } from './conteudo/conteudo';

@NgModule({
  declarations: [
    TopicoPage,
    ConteudoPage
  ],
  imports: [
    IonicPageModule.forChild(TopicoPage),
  ],
  entryComponents: [
    TopicoPage,
    ConteudoPage
  ],
  exports: [
    TopicoPage,
    ConteudoPage 
  ],
})
export class TopicoPageModule {}
