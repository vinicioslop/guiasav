import React from 'react';

import { View, Text, Button } from 'react-native';

export default class Login extends React.Component {

    login(){
        this.props.navigation.navigate('Inicio');
    }
    
    cadastro(){
        this.props.navigation.navigate('Sign');
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text>Tela de Login</Text>
                <Button
                    onPress={() => this.login()}
                    title="Login"
                    color="#006BB4"
                    accessibilityLabel="Botão de login azul"
                />
                <Button
                    onPress={() => this.cadastro()}
                    title="Cadastrar"
                    color="#006BB4"
                    accessibilityLabel="Botão de cadastro azul"
                />
            </View>
        );
    }
}

Login.navigationOptions = {
    title: 'Login'
}
