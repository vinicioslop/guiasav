import React, { Component } from 'react';

import { View, Text } from 'react-native';

export default class Inicio extends Component {

  clique(){
    console.warn('Clicado');
  }

  render() {
    return (
      <View>
        <Text>Inicio</Text>
      </View>
    );
  }
}
