import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ForumCategoriaPage } from './forum-categoria';

@NgModule({
  declarations: [
    ForumCategoriaPage,
  ],
  imports: [
    IonicPageModule.forChild(ForumCategoriaPage),
  ],
})
export class ForumCategoriaPageModule {}
