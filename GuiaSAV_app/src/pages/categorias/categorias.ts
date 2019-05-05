import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, LoadingController, Loading } from 'ionic-angular';

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

  loading: Loading;

  categorias: any[];
  id: number;

  constructor(
    public navCtrl: NavController, 
    public appCtrl: App, 
    public navParams: NavParams,
    private loadingCtrl: LoadingController,
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
    this.showLoading()
    this.api.listaCategorias()
      .subscribe(
        categorias => this.categorias = categorias);
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Por favor espere...',
      duration: 700
    });
    this.loading.present();
  }

  topicoClick(id: number){
    this.id = id;
    this.navCtrl.push(TopicoPage, {
      id: id
    });
  }

}
