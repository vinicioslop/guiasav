// src/Inicio.js

import React from 'react';
import { View, Button, Text } from 'react-native';

const Inicio = ({ navigation }) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home ;D</Text>
        <Button
            title="Ir para Categorias"
            onPress={() => navigation.navigate('Categorias')}
        />
    </View>
);

Inicio.navigationOptions = {
    title: 'Página Inicial'
}

export default Inicio;