// src/index.js

import Inicio from './screens/Inicio';
import Categorias from './screens/conteudo/Categorias';
import Forum from './screens/forum/Forum';
import Perfil from './screens/perfil/Perfil';

import Topicos from './screens/conteudo/Topicos';
import Conteudo from './screens/conteudo/Conteudo';

import { createAppContainer, createBottomTabNavigator, createStackNavigator } from 'react-navigation';

const HomeStack = createStackNavigator({
  Home: Inicio
});

const CategoriasStack = createStackNavigator({
  Categorias: Categorias,
  Topicos: Topicos,
  Conteudo
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