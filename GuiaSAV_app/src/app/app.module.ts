import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AbreviacaoCatPageModule } from '../pages/abreviacao-cat/abreviacao-cat.module';
import { AnatomiaCatPageModule } from '../pages/anatomia-cat/anatomia-cat.module';
import { ContencaoFisicaCatPageModule } from '../pages/contencao_fisica-cat/contencao_fisica-cat.module';
import { DicionarioTermoCatPageModule } from '../pages/dicionario_termo-cat/dicionario_termo-cat.module';
import { EquipamentoMonitorizacaoCatPageModule } from '../pages/equipamento_monitorizacao-cat/equipamento_monitorizacao-cat.module';
import { ExameFisicoGeralCatPageModule } from '../pages/exame_fisico_geral-cat/exame_fisico_geral-cat.module';
import { FarmacologiaCatPageModule } from '../pages/farmacologia-cat/farmacologia-cat.module';
import { FormulaPageCatModule } from '../pages/formula-cat/formula-cat.module';
import { InstrumentoCirurgicoCatPageModule } from '../pages/intrumento_cirurgico-cat/instrumento_cirurgico-cat.module';
import { PrecaucaoPadraoCatPageModule } from '../pages/precaucao_padrao-cat/precaucao_padrao-cat.module';
import { VerificacaoSinalVitalCatPageModule } from '../pages/verficacao_sinal_vital-cat/verificacao_sinal_vital-cat.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
  ],
  imports: [
    BrowserModule,
    
    //menu principal
    AbreviacaoCatPageModule,
    AnatomiaCatPageModule,
    ContencaoFisicaCatPageModule,
    DicionarioTermoCatPageModule,
    EquipamentoMonitorizacaoCatPageModule,
    ExameFisicoGeralCatPageModule,
    FarmacologiaCatPageModule,
    FormulaPageCatModule,
    InstrumentoCirurgicoCatPageModule,
    PrecaucaoPadraoCatPageModule,
    VerificacaoSinalVitalCatPageModule,

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
