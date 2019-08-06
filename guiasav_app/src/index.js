// src/index.js

import Inicio from './screens/Inicio';
import Categorias from './screens/conteudo/Categorias';
import Perfil from './screens/perfil/Perfil';

import { createAppContainer, createBottomTabNavigator } from 'react-navigation';

const Routes = createAppContainer(
  createBottomTabNavigator({
    Home: Inicio,
    Categorias: Categorias,
    Perfil: Perfil
  })
);

export default Routes;