import React from 'react';

import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

export default class Login extends React.Component {

    constructor() {
        super();
        this.state = {
            email: '',
            senha: ''
        }
    }

    login() {
        this.props.navigation.navigate('Home');
    }

    cadastro() {
        this.props.navigation.navigate('Sign');
    }

    render() {
        return (
            <View style={style.view}>
                <Text style={style.titulo}>Tela de Login</Text>

                <TextInput
                    style={style.input}
                    placeholder={'E-mail'}
                    onChange={(text) => this.setState({ email: text })}
                />

                <TextInput
                    style={style.input}
                    placeholder={'Senha'}
                    onChange={(text) => this.setState({ senha: text })}
                />

                <Button
                    onPress={() => this.login()}
                    title="Entrar"
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

const style = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titulo: {
        fontSize: 40,
        paddingBottom: 35
    },
    input: {
        fontSize: 25
    }
});
