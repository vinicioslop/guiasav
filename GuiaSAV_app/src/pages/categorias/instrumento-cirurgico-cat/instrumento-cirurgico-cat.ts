import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InstrumentoCirurgicoCatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-instrumento-cirurgico-cat',
  templateUrl: 'instrumento-cirurgico-cat.html',
})
export class InstrumentoCirurgicoCatPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InstrumentoCirurgicoCatPage');
  }

}
