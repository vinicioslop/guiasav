import React from 'react';
import { View, Text, Button, TouchableHighlight } from 'react-native';

import style from './home-css/style';

export default class Inicio extends React.Component {

  goToLogin() {
    this.props.navigation.navigate('Login');
  }

  render() {
    return (
      <View style={style.container}>
        <Button
          onPress={() => this.goToLogin()}
          title="Login"
          color="#841584"
          accessibilityLabel="Vai pro Login"
        />
      </View>
    );
  }
}

Inicio.navigationOptions = {
  title: 'Home'
}
