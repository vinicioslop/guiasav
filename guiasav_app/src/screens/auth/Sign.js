import React from 'react';

import { View, Text } from 'react-native';

export default class Sign extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text>Tela de Cadastro</Text>
            </View>
        );
    }
}

Sign.navigationOptions = {
    title: 'Sign'
}
