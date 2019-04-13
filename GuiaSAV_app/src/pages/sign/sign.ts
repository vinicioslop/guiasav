import { Component } from '@angular/core';
import { NavController, AlertController, IonicPage } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
 
@IonicPage()
@Component({
  selector: 'page-sign',
  templateUrl: 'sign.html',
})
export class SignPage {
  createSuccess = false;
  registerCredentials = { email: '', password: '' };
 
  constructor
    (
      private nav: NavController, 
      private auth: AuthService, 
      private alertCtrl: AlertController
    )
  {}
 
  public register() {
    this.auth.register(this.registerCredentials).subscribe(success => {
      if (success) {
        this.createSuccess = true;
        this.showPopup("Sucesso", "conta criada.");
      } else {
        this.showPopup("Erro", "erro na criação da conta.");
      }
    },
      error => {
        this.showPopup("Erro", error);
      });
  }
 
  showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
        {
          text: 'OK',
          handler: data => {
            if (this.createSuccess) {
              this.nav.popToRoot();
            }
          }
        }
      ]
    });
    alert.present();
  }
}