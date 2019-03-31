import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { MusculoPage } from './musculo';

@NgModule({
  declarations: [
    MusculoPage,
  ],
  imports: [
    IonicPageModule.forChild(MusculoPage),
  ],
})
export class MusculoPageModule {}
