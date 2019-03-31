import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { AnatomiaCatPage } from '../anatomia-cat/anatomia-cat';
import { MusculoPage } from '../anatomia-cat/musculo/musculo';
import { OssoPage } from '../anatomia-cat/osso/osso';
import { RegiaoAnatomicaPage } from '../anatomia-cat/regiao-anatomica/regiao-anatomica';
import { ViaPage } from '../anatomia-cat/via/via';

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
  entryComponents: [
    AnatomiaCatPage,
    MusculoPage,
    OssoPage,
    RegiaoAnatomicaPage,
    ViaPage
  ],
  exports: [
    AnatomiaCatPage,
    MusculoPage,
    OssoPage,
    RegiaoAnatomicaPage,
    ViaPage
  ],
})
export class AnatomiaCatPageModule {}
