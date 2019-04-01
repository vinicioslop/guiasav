import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoriasPage } from './categorias';

import { AbreviacaoCatPage } from './abreviacao-cat/abreviacao-cat';
import { AnatomiaCatPage } from './anatomia-cat/anatomia-cat';
import { ContencaoFisicaCatPage } from './contencao-fisica-cat/contencao-fisica-cat';
import { DicionarioTermoCatPage } from './dicionario-termo-cat/dicionario-termo-cat';
import { EquipamentoMonitorizacaoCatPage } from './equipamento-monitorizacao-cat/equipamento-monitorizacao-cat';
import { ExameFisicoGeralCatPage } from './exame-fisico-geral-cat/exame-fisico-geral-cat';
import { FarmacologiaCatPage } from './farmacologia-cat/farmacologia-cat';
import { FormulaCatPage } from './formula-cat/formula-cat';
import { InstrumentoCirurgicoCatPage } from './instrumento-cirurgico-cat/instrumento-cirurgico-cat';
import { PrecaucaoPadraoCatPage } from './precaucao-padrao-cat/precaucao-padrao-cat';
import { VerificacaoSinalVitalCatPage } from './verificacao-sinal-vital-cat/verificacao-sinal-vital-cat';

@NgModule({
  declarations: [
    CategoriasPage,
    AbreviacaoCatPage,
    AnatomiaCatPage,
    ContencaoFisicaCatPage,
    DicionarioTermoCatPage,
    EquipamentoMonitorizacaoCatPage,
    ExameFisicoGeralCatPage,
    FarmacologiaCatPage,
    FormulaCatPage,
    InstrumentoCirurgicoCatPage,
    PrecaucaoPadraoCatPage,
    VerificacaoSinalVitalCatPage
  ],
  imports: [
    IonicPageModule.forChild(CategoriasPage),
  ],
  entryComponents: [
    CategoriasPage,
    AbreviacaoCatPage,
    AnatomiaCatPage,
    ContencaoFisicaCatPage,
    DicionarioTermoCatPage,
    EquipamentoMonitorizacaoCatPage,
    ExameFisicoGeralCatPage,
    FarmacologiaCatPage,
    FormulaCatPage,
    InstrumentoCirurgicoCatPage,
    PrecaucaoPadraoCatPage,
    VerificacaoSinalVitalCatPage
  ],
  exports: [
    CategoriasPage,
    AbreviacaoCatPage,
    AnatomiaCatPage,
    ContencaoFisicaCatPage,
    DicionarioTermoCatPage,
    EquipamentoMonitorizacaoCatPage,
    ExameFisicoGeralCatPage,
    FarmacologiaCatPage,
    FormulaCatPage,
    InstrumentoCirurgicoCatPage,
    PrecaucaoPadraoCatPage,
    VerificacaoSinalVitalCatPage
  ],
})
export class CategoriasPageModule {}
