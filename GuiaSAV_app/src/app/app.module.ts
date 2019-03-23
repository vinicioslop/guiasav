import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AnatomiaPageModule } from '../pages/anatomia/anatomia.module';
import { AbreviacaoPageModule } from '../pages/abreviacao/abreviacao.module';
import { ContencaoFisicaPageModule } from '../pages/contencao-fisica/contencao-fisica.module';
import { DicionarioTermoPageModule } from '../pages/dicionario-termo/dicionario-termo.module';
import { EquipamentoMonitorizacaoPageModule } from '../pages/equipamento-monitorizacao/equipamento-monitorizacao.module';
import { ExameFisicoGeralPageModule } from '../pages/exame-fisico-geral/exame-fisico-geral.module';
import { FarmacologiaPageModule } from '../pages/farmacologia/farmacologia.module';
import { InstrumentoCirurgicoPageModule } from '../pages/instrumento-cirurgico/instrumento-cirurgico.module';
import { FormulaPageModule } from '../pages/formula/formula.module';
import { PrecaucaoPadraoPageModule } from '../pages/precaucao-padrao/precaucao-padrao.module';
import { VerificacaoSinalVitalPageModule } from '../pages/verificacao-sinal-vital/verificacao-sinal-vital.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    //menu principal
    AnatomiaPageModule,
    AbreviacaoPageModule,
    ContencaoFisicaPageModule,
    DicionarioTermoPageModule,
    EquipamentoMonitorizacaoPageModule,
    ExameFisicoGeralPageModule,
    FarmacologiaPageModule,
    FormulaPageModule,
    InstrumentoCirurgicoPageModule,
    PrecaucaoPadraoPageModule,
    VerificacaoSinalVitalPageModule,

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
