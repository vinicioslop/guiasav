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
import { FormulaPageModule } from '../pages/formula/formula.module';
import { InstrumentoCirurgicoPageModule } from '../pages/instrumento-cirurgico/instrumento-cirurgico.module';
import { VerificacaoSinalVitalPageModule } from '../pages/verificacao-sinal-vital/verificacao-sinal-vital.module';
import { PrecaucaoPadraoPageModule } from '../pages/precaucao-padrao/precaucao-padrao.module';
import { OssoPageModule } from '../pages/osso/osso.module';
import { MusculoPageModule } from '../pages/musculo/musculo.module';
import { ViaPageModule } from '../pages/via/via.module';
import { RegiaoAnatomicaPageModule } from '../pages/regiao-anatomica/regiao-anatomica.module';
import { PrincipalFarmacoPageModule } from '../pages/principal-farmaco/principal-farmaco.module';
import { ViaAplicacaoPageModule } from '../pages/via-aplicacao/via-aplicacao.module';
import { HigieneMaoPageModule } from '../pages/higiene-mao/higiene-mao.module';
import { MascaraProtetorOcularPageModule } from '../pages/mascara-protetor-ocular/mascara-protetor-ocular.module';
import { ControleAmbientePageModule } from '../pages/controle-ambiente/controle-ambiente.module';
import { AventalPageModule } from '../pages/avental/avental.module';
import { MaterialPerfuroCortantePageModule } from '../pages/material-perfuro-cortante/material-perfuro-cortante.module';
import { ManuseioLuvaEsterilPageModule } from '../pages/manuseio-luva-esteril/manuseio-luva-esteril.module';
import { FarmacologiaPageModule } from '../pages/farmacologia/farmacologia.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
  ],
  imports: [
    BrowserModule,
    
    //menu principal
    FarmacologiaPageModule,
    AnatomiaPageModule,
    AbreviacaoPageModule,
    ContencaoFisicaPageModule,
    DicionarioTermoPageModule,
    EquipamentoMonitorizacaoPageModule,
    ExameFisicoGeralPageModule,
    FormulaPageModule,
    InstrumentoCirurgicoPageModule,
    PrecaucaoPadraoPageModule,
    VerificacaoSinalVitalPageModule,
    
    //pag anatomia
    OssoPageModule,
    MusculoPageModule,
    ViaPageModule,
    RegiaoAnatomicaPageModule,
    
    //pag farmacologia
    PrincipalFarmacoPageModule,
    ViaAplicacaoPageModule,
    
    //pag precaução padrão
    HigieneMaoPageModule,
    MascaraProtetorOcularPageModule,
    AventalPageModule,
    ControleAmbientePageModule,
    MaterialPerfuroCortantePageModule,
    ManuseioLuvaEsterilPageModule,
    
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
