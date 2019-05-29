import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListDiscussaoPage } from './list-discussao';

@NgModule({
  declarations: [
    ListDiscussaoPage,
  ],
  imports: [
    IonicPageModule.forChild(ListDiscussaoPage),
  ],
})
export class ListDiscussaoPageModule {}
