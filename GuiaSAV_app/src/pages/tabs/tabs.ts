import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { CategoriasPage } from '../categorias/categorias';
import { PerfilPage } from '../perfil/perfil';
import { FavoritosPage } from '../perfil/favoritos/favoritos';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  home = HomePage;
  conteudo = CategoriasPage;
  favoritos = FavoritosPage;
  perfil = PerfilPage;

  constructor() {

  }
}
