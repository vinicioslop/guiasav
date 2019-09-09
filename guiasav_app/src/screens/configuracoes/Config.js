import React from 'react';

import { StyleSheet, View, Text, Image } from 'react-native';

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

  componentDidMount() {
    
  }

  render() {
    return (
      <View style={style.containier}>
        <View style={style.iconName}>
          <Image
            style={style.userImage}
            source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/At_sign.svg/250px-At_sign.svg.png'}}
          />
          <Text style={style.userName}>{this.state.user.nome}</Text>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  containier: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconName: {
    
  },
  userImage: {
    width: 100,
    height: 100,
    paddingBottom: 5
  },
  userName: {
    fontSize: 25
  }
});

Config.navigationOptions = {
  title: 'Configurações',
}
