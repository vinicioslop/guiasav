import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { CategoriasPage } from './categorias';

import { AbreviacaoCatPage } from './abreviacao-cat/abreviacao-cat';
import { AnatomiaCatPage } from './anatomia-cat/anatomia-cat';
import { ContencaoFisicaCatPage } from './contencao_fisica-cat/contencao_fisica-cat';
import { DicionarioTermoCatPage } from './dicionario_termo-cat/dicionario_termo-cat';
import { EquipamentoMonitorizacaoCatPage } from './equipamento_monitorizacao-cat/equipamento_monitorizacao-cat';
import { ExameFisicoGeralCatPage } from './exame_fisico_geral-cat/exame_fisico_geral-cat';
import { FarmacologiaCatPage } from './farmacologia-cat/farmacologia-cat';
import { FormulaCatPage } from './formula-cat/formula-cat';
import { InstrumentoCirurgicoCatPage } from './intrumento_cirurgico-cat/instrumento_cirurgico-cat';
import { PrecaucaoPadraoCatPage } from './precaucao_padrao-cat/precaucao_padrao-cat';
import { VerificacaoSinalVitalCatPage } from './verficacao_sinal_vital-cat/verificacao_sinal_vital-cat';

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
})
export class CategoriasPageModule {}
