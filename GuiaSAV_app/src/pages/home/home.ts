import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CategoriasPage } from '../categorias/categorias';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  categoriaClick(){
    this.navCtrl.push(CategoriasPage);
  }
}
