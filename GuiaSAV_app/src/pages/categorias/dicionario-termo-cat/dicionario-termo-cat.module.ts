import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DicionarioTermoCatPage } from './dicionario-termo-cat';

@NgModule({
  declarations: [
    DicionarioTermoCatPage,
  ],
  imports: [
    IonicPageModule.forChild(DicionarioTermoCatPage),
  ],
})
export class DicionarioTermoCatPageModule {}
