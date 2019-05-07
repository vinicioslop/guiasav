import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';

import { AuthService } from '../../providers/auth-service/auth-service';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-forum',
  templateUrl: 'forum.html',
})
export class ForumPage {

  constructor(
    public navCtrl: NavController,
    public appCtrl: App,
    public navParams: NavParams,
    public auth: AuthService
    ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForumPage');
  }

  public logout() {
    this.auth.logout().subscribe(succ => {
      this.appCtrl.getRootNav().setRoot(LoginPage)
    });
  }

}
