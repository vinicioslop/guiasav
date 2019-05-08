import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ForumRecentePage } from './forum-recente';

@NgModule({
  declarations: [
    ForumRecentePage,
  ],
  imports: [
    IonicPageModule.forChild(ForumRecentePage),
  ],
})
export class ForumRecentePageModule {}
