import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { CategoriasPage } from '../categorias/categorias';
import { PerfilPage } from '../perfil/perfil';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  home = HomePage;
  conteudo = CategoriasPage;
  perfil = PerfilPage;

  constructor() {

  }
}
