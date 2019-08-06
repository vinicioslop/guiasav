// src/Inicio.js

import React from 'react';
import { View, Text } from 'react-native';

const Inicio = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Home</Text>
  </View>
);

Inicio.navigationOptions = {
  title: 'Home',
}

export default Inicio;