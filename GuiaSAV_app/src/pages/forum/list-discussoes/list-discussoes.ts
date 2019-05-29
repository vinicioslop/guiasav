import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-list-discussoes',
  templateUrl: 'list-discussoes.html',
})
export class ListDiscussoesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {}

  listDiscussao(){
    this.navCtrl.push('ListDiscussaoPage');
  }

}
