import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, Loading, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-conteudo',
  templateUrl: 'conteudo.html',
})
export class ConteudoPage {

  loading: Loading;

  haveData: boolean;
  mensagem: string;

  id_conteudo: number;
  nome_conteudo: string;
  txt_conteudo: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private loadingCtrl: LoadingController
  ) {
    let id = navParams.get('id');
    let nome = navParams.get('nome');
    let conteudo = navParams.get('conteudo');
    this.save(id, nome, conteudo);
  }

  save(id: number, nome: string, conteudo: string) {
    this.id_conteudo = id;
    this.nome_conteudo = nome;
    this.txt_conteudo = conteudo;
    this.haveData = true;

    if (this.txt_conteudo == null) {
      this.haveData = false;
      this.mensagem = 'Conteúdo não publicado';
    }
  }

  ionViewDidLoad() {
    this.showLoading();
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Por favor espere...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

}
