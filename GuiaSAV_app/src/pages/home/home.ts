import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';

import { AuthService } from '../../providers/auth-service/auth-service';
import { LoginPage } from '../login/login';
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(private navCtrl: NavController, public appCtrl: App, private auth: AuthService) {

  }
  loginClick(){
    this.navCtrl.push('LoginPage');
  }
  signClick(){
    this.navCtrl.push('SignPage');
  }

  public logout() {
    this.auth.logout().subscribe(succ => {
      this.appCtrl.getRootNav().setRoot(LoginPage)
    });
  }
}