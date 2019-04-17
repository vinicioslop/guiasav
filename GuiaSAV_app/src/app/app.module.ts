import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AuthService } from '../providers/auth-service/auth-service';
import { ApiProvider } from '../providers/api/api';
import { TabsPage } from '../pages/tabs/tabs';

import { LoginPageModule } from '../pages/login/login.module';
import { SignPageModule } from '../pages/sign/sign.module';
import { PerfilPageModule } from '../pages/perfil/perfil.module';

import { CategoriasPageModule } from '../pages/categorias/categorias.module';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
  ],
  imports: [
    BrowserModule,
    
    //menu principal
    CategoriasPageModule,
    LoginPageModule,
    SignPageModule,
    PerfilPageModule,

    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    ApiProvider,
  ]
})
export class AppModule {}
