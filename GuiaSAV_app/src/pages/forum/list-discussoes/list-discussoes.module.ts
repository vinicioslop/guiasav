import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListDiscussoesPage } from './list-discussoes';

@NgModule({
  declarations: [
    ListDiscussoesPage,
  ],
  imports: [
    IonicPageModule.forChild(ListDiscussoesPage),
  ],
})
export class ListDiscussoesPageModule {}
