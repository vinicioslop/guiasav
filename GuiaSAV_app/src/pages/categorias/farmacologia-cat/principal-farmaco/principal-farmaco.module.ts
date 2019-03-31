import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { PrincipalFarmacoPage } from './principal-farmaco';

@NgModule({
  declarations: [
    PrincipalFarmacoPage,
  ],
  imports: [
    IonicPageModule.forChild(PrincipalFarmacoPage),
  ],
})
export class PrincipalFarmacoPageModule {}
