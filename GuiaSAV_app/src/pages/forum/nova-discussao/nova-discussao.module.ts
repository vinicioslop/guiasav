import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NovaDiscussaoPage } from './nova-discussao';

@NgModule({
  declarations: [
    NovaDiscussaoPage,
  ],
  imports: [
    IonicPageModule.forChild(NovaDiscussaoPage),
  ],
})
export class NovaDiscussaoPageModule {}
