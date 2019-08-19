// src/index.js

import Inicio from './screens/Inicio';
import Perfil from './screens/perfil/Perfil';

import Categorias from './screens/conteudo/Categorias';
import Topicos from './screens/conteudo/Topicos';
import Conteudo from './screens/conteudo/Conteudo';

import { createAppContainer, createBottomTabNavigator, createStackNavigator } from 'react-navigation';

const Routes = createAppContainer(
  createBottomTabNavigator({
    Home: Inicio,
    Categorias: Categorias,
    Perfil: Perfil
  })
);

export default Routes;