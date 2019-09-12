import React from 'react';

import { Image } from 'react-native';

import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';

//Estilo do tabs
import style from './tabStyle/style'

//Import AuthStack
import Login from './screens/auth/Login';
import Sign from './screens/auth/Sign';

//Import Stack Home
import Inicio from './screens/Inicio';

//Import Stack Favoritos
import Favoritos from './screens/favoritos/Favoritos';

//Import Stack Categorias
import Categorias from './screens/conteudo/Categorias';
import Topicos from './screens/conteudo/Topicos';
import Conteudo from './screens/conteudo/conteudo/Conteudo';

//Import Stack Forum
import Forum from './screens/forum/Forum';

//Import Stack Config
import Config from './screens/configuracoes/Config';

//Definição do Stack Home
const HomeStack = createStackNavigator(
  {
    Inicio: {
      screen: Inicio,
    },
  },
  {
    defaultNavigationOptions: {
      headerTitleStyle: {

      }
    }
  }
);

//Definição do Stack Favoritos
const FavoritosStack = createStackNavigator({
  Favoritos: {
    screen: Favoritos
  }
});

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
      screen: HomeStack
    },
    "Favoritos": {
      screen: FavoritosStack
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
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'Home') {
          return (
            <Image
              source={require('./icons/tab_icons/home.png')}
              style={style.icon} />
          );
        } else if (routeName === 'Favoritos') {
          return (
            <Image
              source={require('./icons/tab_icons/favorito.png')}
              style={style.icon} />
          );
        } else if (routeName === 'Categorias') {
          return (
            <Image
              source={require('./icons/tab_icons/cat.png')}
              style={style.icon} />
          );
        } else if (routeName === 'Fórum') {
          return (
            <Image
              source={require('./icons/tab_icons/forum.png')}
              style={style.icon} />
          );
        } else if (routeName === 'Configurações') {
          return (
            <Image
              source={require('./icons/tab_icons/config.png')}
              style={style.icon} />
          );
        }
      }
    }),
    tabBarOptions: {
      activeTintColor: '#00AA44',
      inactiveTintColor: '#005522',
      showLabel: false
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
