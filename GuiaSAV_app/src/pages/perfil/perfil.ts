import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';

import { AuthService } from '../../providers/auth-service/auth-service';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  nome = '';
  login = '';
  email = '';
  senha = '';

  constructor(
    public navCtrl: NavController,
    public appCtrl: App,
    public navParams: NavParams,
    public auth: AuthService
  ) {

    let user = this.auth.getUserInfo();
    this.nome = user.nome;
    this.login = user.login;
    this.email = user.email;
    this.senha = user.senha;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

  atualizaSenha() {
    console.log("A implementar");
  }

  esqueciSenha() {
    console.log("A implementar");
  }

  public logout() {
    this.auth.logout().subscribe(succ => {
      this.appCtrl.getRootNav().setRoot(LoginPage)
    });
  }

}
