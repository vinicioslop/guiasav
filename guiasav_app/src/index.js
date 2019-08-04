// src/index.js

import Inicio from './screens/Inicio';

import Categorias from './screens/Conteudo/Categorias';
import Topicos from './screens/Conteudo/Topicos';
import Conteudo from './screens/Conteudo/Conteudo';

import { createAppContainer, createStackNavigator } from 'react-navigation';

const Routes = createAppContainer(
    createStackNavigator({
        Home: Inicio,
        Categorias: Categorias,
        Topicos: Topicos,
        Conteudo: Conteudo
    })
);

export default Routes;