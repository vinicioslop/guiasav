import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  categoriaClick(){
    this.navCtrl.push('CategoriasPage');
  }
  loginClick(){
    this.navCtrl.push('LoginPage');
  }
  signClick(){
    this.navCtrl.push('SignPage');
  }
}
