import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { CategoriasPageModule } from '../pages/categorias/categorias.module';
import { LoginPageModule } from '../pages/login/login.module';
import { SignPageModule } from '../pages/sign/sign.module';

//imports provisórios

  //anatomia
import { OssoPageModule } from '../pages/categorias/anatomia-cat/osso/osso.module';
import { MusculoPageModule } from '../pages/categorias/anatomia-cat/musculo/musculo.module';
import { RegiaoAnatomicaPageModule } from '../pages/categorias/anatomia-cat/regiao-anatomica/regiao-anatomica.module';
import { ViaPageModule } from '../pages/categorias/anatomia-cat/via/via.module';

  //farmacologia
import { PrincipalFarmacoPageModule } from '../pages/categorias/farmacologia-cat/principal-farmaco/principal-farmaco.module';
import { ViaAplicacaoPageModule } from '../pages/categorias/farmacologia-cat/via-aplicacao/via-aplicacao.module';

  //precaução padrão
import { AventalPageModule } from '../pages/categorias/precaucao-padrao-cat/avental/avental.module';
import { ControleAmbientePageModule } from '../pages/categorias/precaucao-padrao-cat/controle-ambiente/controle-ambiente.module';
import { HigieneMaoPageModule } from '../pages/categorias/precaucao-padrao-cat/higiene-mao/higiene-mao.module';
import { ManuseioLuvaEsterilPageModule } from '../pages/categorias/precaucao-padrao-cat/manuseio-luva-esteril/manuseio-luva-esteril.module';
import { MascaraProtetorOcularPageModule } from '../pages/categorias/precaucao-padrao-cat/mascara-protetor-ocular/mascara-protetor-ocular.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
  ],
  imports: [
    BrowserModule,
    
    //menu principal
    CategoriasPageModule,
    LoginPageModule,
    SignPageModule,

    //declarações provisórias

      //anatomia
    MusculoPageModule,
    OssoPageModule,
    RegiaoAnatomicaPageModule,
    ViaPageModule,

      //farmacologia
    PrincipalFarmacoPageModule,
    ViaAplicacaoPageModule,

      //precaução padrão
    AventalPageModule,
    ControleAmbientePageModule,
    HigieneMaoPageModule,
    ManuseioLuvaEsterilPageModule,
    MascaraProtetorOcularPageModule,

    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
