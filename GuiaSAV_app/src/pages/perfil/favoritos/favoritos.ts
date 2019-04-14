import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-favoritos',
  templateUrl: 'favoritos.html'
})
export class FavoritosPage {

  constructor(public navCtrl: NavController) {
  }
  
  /*goToConteudoPage(params){
    if (!params) params = {};
    this.navCtrl.push(ConteudoPage);
  }*/
}
