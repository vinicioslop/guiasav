import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DicionarioTermoPage } from './dicionario-termo';

@NgModule({
  declarations: [
    DicionarioTermoPage,
  ],
  imports: [
    IonicPageModule.forChild(DicionarioTermoPage),
  ],
})
export class DicionarioTermoPageModule {}
