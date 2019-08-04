// src/Topicos.js

import React from 'react';
import { View, Text } from 'react-native';

const Topicos = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Tópicos</Text>
    </View>
);

Topicos.navigationOptions = {
    title: 'Tópicos',
}

export default Topicos;