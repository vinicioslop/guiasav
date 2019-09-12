import React from 'react';

import { View, Text, Image } from 'react-native';

import style from './css/style';

export default class Config extends React.Component {

  constructor() {
    super();
    this.state = {
      user: {
        nome: 'Administrador',
        email: 'admin@admin.com',
        senha: 'admin'
      }
    }
  }

  render() {
    return (
      <View style={style.containier}>
        <View style={style.iconName}>
          <Image
            style={style.userImage}
            source={require('../../images/@.png')}
          />
          <Text style={style.userName}>{this.state.user.nome}</Text>
        </View>
      </View>
    );
  }
}

Config.navigationOptions = {
  title: 'Configurações',
}
