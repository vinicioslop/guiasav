import React from 'react';

import { View, Text } from 'react-native';

export default class Perfil extends React.Component {

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Perfil</Text>
      </View>
    );
  }
}

Perfil.navigationOptions = {
  title: 'Perfil',
}
