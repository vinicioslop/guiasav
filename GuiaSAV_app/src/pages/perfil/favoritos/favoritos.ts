import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';

import { ConteudoPage } from '../../categorias/topico/conteudo/conteudo';
import { AuthService } from '../../../providers/auth-service/auth-service';
import { LoginPage } from '../../login/login';

@IonicPage()
@Component({
  selector: 'page-favoritos',
  templateUrl: 'favoritos.html'
})
export class FavoritosPage {

  constructor(
    public navCtrl: NavController,
    public appCtrl: App,
    public navParams: NavParams,
    public auth: AuthService
    ) {}
  
  goToConteudoPage(){
    this.navCtrl.push(ConteudoPage);
  }

  public logout() {
    this.auth.logout().subscribe(succ => {
      this.appCtrl.getRootNav().setRoot(LoginPage)
    });
  }
}
