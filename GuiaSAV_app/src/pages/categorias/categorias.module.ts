import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoriasPage } from './categorias';

import { TopicoPage } from './topico/topico';

@NgModule({
  declarations: [
    CategoriasPage,
    TopicoPage
  ],
  imports: [
    IonicPageModule.forChild(CategoriasPage),
  ],
  entryComponents: [
    CategoriasPage,
    TopicoPage
  ],
  exports: [
    CategoriasPage,
    TopicoPage
  ],
})
export class CategoriasPageModule {}
