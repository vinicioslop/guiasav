import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, LoadingController, Loading } from 'ionic-angular';

import { ApiProvider } from '../../../providers/api/api';

@IonicPage()
@Component({
  selector: 'page-forum-categoria',
  templateUrl: 'forum-categoria.html',
})
export class ForumCategoriaPage {
  loading: Loading;

  categorias: any[];
  id_cat: number;
  assuntos: any[];

  constructor(
    public navCtrl: NavController,
    public appCtrl: App,
    public navParams: NavParams,
    private loadingCtrl: LoadingController,
    private api: ApiProvider) 
    {

  }

  ionViewDidLoad() {
    this.listaForumCat();
  }

  listaForumCat() {
    this.loading = this.loadingCtrl.create({
      content: 'Por favor espere...',
      duration: 900
    });
    this.loading.present().then(() => {
      this.api.listaForumCat()
        .subscribe(
          categorias => this.categorias = categorias);
      () => this.loading.dismiss();
    });
  }

  listaAssuntos(id: number){
    this.navCtrl.push('ListDiscussoesPage');
  }

}
