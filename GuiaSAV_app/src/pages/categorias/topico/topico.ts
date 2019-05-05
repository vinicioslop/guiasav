import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController } from 'ionic-angular';

import { ApiProvider } from '../../../providers/api/api';

@IonicPage()
@Component({
  selector: 'page-topico',
  templateUrl: 'topico.html',
})
export class TopicoPage {

  loading: Loading;

  topicos: string[];
  id_categoria: number;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private loadingCtrl: LoadingController,
    private api: ApiProvider) 
    {
      let id_categoria = navParams.get('id');
      this.saveId(id_categoria);
  }

  ionViewDidLoad() {
    this.listaTopicos();
  }

  saveId(id: number){
    this.id_categoria = id;
  }

  listaTopicos() {
    this.showLoading()
    this.api.listaTopicos(this.id_categoria)
       .subscribe(
         topicos => this.topicos = topicos);
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Por favor espere...',
      duration: 700
    });
    this.loading.present();
  }

  conteudoClick(id_cont: number, nm_cont: string, ds_cont: string){
    this.navCtrl.push('ConteudoPage', {
      id: id_cont,
      nome: nm_cont,
      conteudo: ds_cont
    });
  }

}
