import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';

import { AuthService } from '../../providers/auth-service/auth-service';
import { LoginPage } from '../login/login';
import { TopicoPage } from './topico/topico';
import { ApiProvider } from '../../providers/api/api';

@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {

  categorias: string[];

  constructor(
    public navCtrl: NavController, 
    public appCtrl: App, 
    public navParams: NavParams,
    public auth: AuthService,
    private api: ApiProvider
    ){}

  ionViewDidLoad() {
    this.listaCategorias();
  }

  public logout() {
    this.auth.logout().subscribe(succ => {
      this.appCtrl.getRootNav().setRoot(LoginPage)
    });
  }

  listaCategorias() {
    this.api.listaCategorias()
       .subscribe(
         categorias => this.categorias = categorias);
  }

  topicoClick(){
    this.navCtrl.push(TopicoPage);
  }

}
