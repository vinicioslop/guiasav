import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AnatomiaPage } from '../anatomia/anatomia';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  anatomiaClick(){
    this.navCtrl.push(AnatomiaPage);
  }
}
