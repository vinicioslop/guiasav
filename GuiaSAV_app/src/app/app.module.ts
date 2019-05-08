import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 

import { TabsPage } from '../pages/tabs/tabs';

import { HomePage } from '../pages/home/home';
import { AuthService } from '../providers/auth-service/auth-service';
import { ApiProvider } from '../providers/api/api';

import { LoginPageModule } from '../pages/login/login.module';
import { SignPageModule } from '../pages/sign/sign.module';
import { PerfilPageModule } from '../pages/perfil/perfil.module';

import { CategoriasPageModule } from '../pages/categorias/categorias.module';
import { ForumPageModule } from '../pages/forum/forum.module';

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
    ForumPageModule,

    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule
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
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthService,
    ApiProvider,
  ]
})
export class AppModule { }
