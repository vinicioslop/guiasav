import React from 'react';

import { View, Text, Button } from 'react-native';

export default class Sign extends React.Component {

    login(){
        this.props.navigation.pop();
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Tela de Cadastro</Text>
                <Button
                    onPress={() => this.login()}
                    title="Cadastrar"
                    color="#006BB4"
                    accessibilityLabel="Botão de cadastro azul"
                />
            </View>
        );
    }
}

Sign.navigationOptions = {
    title: 'Sign'
}
