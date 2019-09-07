import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

export default class Inicio extends React.Component {

  goToLogin() {
    this.props.navigation.navigate('Login');
  }

  render() {
    return (
      <View style={style.container}>
        <Text style={style.texto}>Home</Text>
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

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    
  },
});

Inicio.navigationOptions = {
  title: 'Home'
}
