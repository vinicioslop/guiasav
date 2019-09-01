import { createAppContainer, createBottomTabNavigator, createStackNavigator } from 'react-navigation';

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

//Import Stack Perfil
import Perfil from './screens/perfil/Perfil';


//Definição do Stack Inicio
const HomeStack = createStackNavigator({
  Inicio: Inicio
});

//Definição do Stack Categorias
const CategoriasStack = createStackNavigator({
  Categorias: Categorias,
  Topicos: Topicos,
  Conteudo: Conteudo
});

//Definição do Stack Forum
const ForumStack = createStackNavigator({
  Forum: Forum
});

//Definição do Stack Perfil
const PerfilStack = createStackNavigator({
  Perfil: Perfil
});

//Definição do TabStack
const TabStack = createBottomTabNavigator({
  Inicio: HomeStack,
  Categorias: CategoriasStack,
  Forum: ForumStack,
  Perfil: PerfilStack
});

const Routes = createAppContainer(
  createStackNavigator({
    Login: Login,
    Sign: Sign,
    Tab: {
      screen: TabStack,
      header: null
    }
  })
);

export default Routes;