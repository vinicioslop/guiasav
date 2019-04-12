import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AuthService } from '../../providers/auth-service/auth-service';
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private navCtrl: NavController, private auth: AuthService) {

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
  perfilClick(){
    this.navCtrl.push('PerfilPage');
  }

  public logout() {
    this.auth.logout().subscribe(succ => {
      this.navCtrl.setRoot('LoginPage')
    });
  }
}