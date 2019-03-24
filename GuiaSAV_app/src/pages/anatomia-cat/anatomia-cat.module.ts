import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { AnatomiaCatPage } from './anatomia-cat';
import { MusculoPage } from './musculo/musculo';
import { OssoPage } from './osso/osso';
import { RegiaoAnatomicaPage } from './regiao-anatomica/regiao-anatomica';
import { ViaPage } from './via/via';

@NgModule({
  declarations: [
    AnatomiaCatPage,
    MusculoPage,
    OssoPage,
    RegiaoAnatomicaPage,
    ViaPage
  ],
  imports: [
    IonicPageModule.forChild(AnatomiaCatPage),
  ],
})
export class AnatomiaCatPageModule {}
