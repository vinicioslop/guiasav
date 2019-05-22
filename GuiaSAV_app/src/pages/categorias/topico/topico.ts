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
  nm_categoria: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private loadingCtrl: LoadingController,
    private api: ApiProvider) 
    {
      let id_categoria = navParams.get('id');
      let nm_categoria = navParams.get('nome');
      this.save(id_categoria, nm_categoria);
  }

  ionViewDidLoad() {
    this.listaTopicos();
  }

  save(id: number, nome: string){
    this.id_categoria = id;
    this.nm_categoria = nome;
  }

  listaTopicos() {
    this.showLoading()
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Por favor espere...',
      duration: 900
    });
    this.loading.present().then(() => {
      this.api.listaTopicos(this.id_categoria)
       .subscribe(
         topicos => this.topicos = topicos);
      () => this.loading.dismiss();
    });
  }

  conteudoClick(id_cont: number, nm_cont: string, ds_cont: string){
    this.navCtrl.push('ConteudoPage', {
      id: id_cont,
      nome: nm_cont,
      conteudo: ds_cont
    });
  }

}
