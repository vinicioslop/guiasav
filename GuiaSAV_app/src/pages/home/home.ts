import { Component, ViewChild } from '@angular/core';
import { NavController, App, Slides } from 'ionic-angular';

import { AuthService } from '../../providers/auth-service/auth-service';
import { LoginPage } from '../login/login';
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild(Slides) slides: Slides;

  imageContainer = [
  {name: 'mountain', url:"http://www.mobile-phone.pk/images/wallpapers/mountain_wallpaper_nature_mobile_wallpaper.jpg" },
  {name : 'sky', url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMeW0Tp1XQXgMJiJcCgAEOzlibTVLJGP6XgyBTC2oOWbTM__s-"} ];

  ionViewDidLoad(){
    this.slides.paginationClickable=true;
    this.slides.initialSlide=0;
    this.slides.autoplay = 500;
    this.slides.loop = true;
    this.slides.speed = 2000;
  }

  constructor(private navCtrl: NavController, public appCtrl: App, private auth: AuthService) {

  }
  loginClick(){
    this.navCtrl.push('LoginPage');
  }
  signClick(){
    this.navCtrl.push('SignPage');
  }

  public logout() {
    this.auth.logout().subscribe(succ => {
      this.appCtrl.getRootNav().setRoot(LoginPage)
    });
  }

  slideNext(){
    this.slides.slideNext();
  }

  slidePrev(){
    this.slides.slidePrev();
  }
}