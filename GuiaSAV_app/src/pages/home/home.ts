import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CategoriasPage } from '../categorias/categorias';
import { LoginPage } from '../login/login';
import { SignPage } from '../sign/sign';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  categoriaClick(){
    this.navCtrl.push(CategoriasPage);
  }
  loginClick(){
    this.navCtrl.push(LoginPage);
  }
  signClick(){
    this.navCtrl.push(SignPage);
  }
}
