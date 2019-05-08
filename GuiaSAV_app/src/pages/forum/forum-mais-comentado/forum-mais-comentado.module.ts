import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ForumMaisComentadoPage } from './forum-mais-comentado';

@NgModule({
  declarations: [
    ForumMaisComentadoPage,
  ],
  imports: [
    IonicPageModule.forChild(ForumMaisComentadoPage),
  ],
})
export class ForumMaisComentadoPageModule {}
