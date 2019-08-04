// src/Conteudo.js

import React from 'react';
import { View, Button, Text } from 'react-native';

const Conteudo = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Conteúdo</Text>
    </View>
);

Conteudo.navigationOptions = {
    title: 'Conteudo',
}

export default Conteudo;