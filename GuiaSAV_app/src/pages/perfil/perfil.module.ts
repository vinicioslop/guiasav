import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PerfilPage } from './perfil';
import { FavoritosPage } from './favoritos/favoritos';

@NgModule({
  declarations: [
    PerfilPage,
    FavoritosPage
  ],
  imports: [
    IonicPageModule.forChild(PerfilPage),
  ],
  entryComponents: [
    PerfilPage,
    FavoritosPage
  ]
})
export class PerfilPageModule {}
