import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ControleAmbientePage } from './controle-ambiente';

@NgModule({
  declarations: [
    ControleAmbientePage,
  ],
  imports: [
    IonicPageModule.forChild(ControleAmbientePage),
  ],
})
export class ControleAmbientePageModule {}
