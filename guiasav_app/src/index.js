// src/index.js

import { createAppContainer, createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import Inicio from './screens/Inicio';
import Categorias from './screens/conteudo/Categorias';
import Forum from './screens/forum/Forum';
import Perfil from './screens/perfil/Perfil';

import Topicos from './screens/conteudo/Topicos';
import Conteudo from './screens/conteudo/Conteudo';

const HomeStack = createStackNavigator({
  Home: Inicio
});

const CategoriasStack = createStackNavigator({
  Categorias: Categorias,
  Topicos: Topicos,
  Conteudo: Conteudo
});

const ForumStack = createStackNavigator({
  Forum: Forum
});

const PerfilStack = createStackNavigator({
  Perfil: Perfil
});

const Routes = createAppContainer(
  createBottomTabNavigator({
    Home: HomeStack,
    Categorias: CategoriasStack,
    Forum: ForumStack,
    Perfil: PerfilStack
  })
);

export default Routes;