import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { CategoriasPage } from '../categorias/categorias';
import { FavoritosPage } from '../perfil/favoritos/favoritos';
import { ForumPage } from '../forum/forum';
import { PerfilPage } from '../perfil/perfil';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  home = HomePage;
  conteudo = CategoriasPage;
  favoritos = FavoritosPage;
  forum = ForumPage;
  perfil = PerfilPage;

  constructor() {

  }
}
