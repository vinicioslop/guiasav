import React from 'react';
import { View, Text, Button } from 'react-native';
import { HeaderBackButton } from 'react-navigation';

export default class Inicio extends React.Component {

  goToLogin(){
    this.props.navigation.navigate('Login');
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home</Text>
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
