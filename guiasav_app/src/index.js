import React from 'react';

import { Image } from 'react-native';

import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';

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
    Inicio: {
      screen: HomeStack,
      title: "Home",
    },
    Cat: {
      screen: CategoriasStack,
      title: "Categorias"
    },
    Forum: {
      screen: ForumStack,
      title: "Fórum"
    },
    Config: {
      screen: ConfigStack,
      title: "COnfigurações"
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'Inicio') {
          return (
            <Image
              source={require('./icons/home.png')}
              style={{ width: 20, height: 20, }} />
          );
        } else if (routeName === 'Cat') {
          return (
            <Image
              source={require('./icons/cat.png')}
              style={{ width: 20, height: 20, }} />
          );
        } else if (routeName === 'Forum') {
          return (
            <Image
              source={require('./icons/forum.png')}
              style={{ width: 20, height: 20, }} />
          );
        } else if (routeName === 'Config') {
          return (
            <Image
              source={require('./icons/config.png')}
              style={{ width: 20, height: 20, }} />
          );
        }
      }
    }),
    tabBarOptions: {
      activeTintColor: '#FF6F00',
      inactiveTintColor: '#263238',
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
