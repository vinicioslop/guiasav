import React from 'react';

import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';

import Ionicons from 'react-native-vector-icons/Ionicons';

//Import AuthStack
import Login from './screens/auth/Login';
import Sign from './screens/auth/Sign';

//Import Stack Inicio
import Inicio from './screens/Inicio';

//Import Stack Categorias
import Categorias from './screens/conteudo/Categorias';
import Topicos from './screens/conteudo/Topicos';
import Conteudo from './screens/conteudo/Conteudo';

//Import Stack Forum
import Forum from './screens/forum/Forum';

//Import Stack Config
import Config from './screens/configuracoes/Config';

//Definição do Stack Home
const HomeStack = createStackNavigator(
  {
    Inicio: {
      screen: Inicio
    },
  },
  {
    defaultNavigationOptions: {
      /*headerStyle: {
        backgroundColor: 'black'
      }*/
    }
  }
);

//Definição do Stack Categorias
const CategoriasStack = createStackNavigator({
  Categorias: {
    screen: Categorias
  },
  Topicos: {
    screen: Topicos
  },
  Conteudo: {
    screen: Conteudo
  }
});

//Definição do Stack Forum
const ForumStack = createStackNavigator({
  Forum: {
    screen: Forum
  }
});

//Definição do Stack Config
const ConfigStack = createStackNavigator({
  Config: {
    screen: Config
  }
});

//Definição do TabStack
const TabStack = createBottomTabNavigator(
  {
    "Home": {
      screen: HomeStack,
      tabBarIcon: {

      }
    },
    "Categorias": {
      screen: CategoriasStack
    },
    "Fórum": {
      screen: ForumStack
    },
    "Configurações": {
      screen: ConfigStack
    },
  },
  {
    tabBarOptions: {
      //showLabel: false,
      activeTintColor: 'green',
      inactiveTintColor: 'gray',
      /*style: {
        backgroundColor: 'black'
      }*/
    },
  }
);

export default createAppContainer(
  createStackNavigator({
    Login: {
      screen: Login
    },
    Sign: {
      screen: Sign
    },
    Tab: TabStack
  }, {
    header: null,
    headerMode: 'none',
    headerBackTitleVisible: false
  }),
);
