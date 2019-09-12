import React from 'react';

import { View, Text, TextInput, Button } from 'react-native';

import style from './auth-css/style';

export default class Login extends React.Component {

    login() {
        this.props.navigation.navigate('Inicio');
    }

    cadastro() {
        this.props.navigation.navigate('Sign');
    }

    render() {
        return (
            <View style={style.view}>
                <View style={style.form}>
                    <Text style={style.titulo}>Tela de Login</Text>

                    <TextInput
                        style={style.input}
                        placeholder={'E-mail'}
                        onChange={() => console.warn('Digitou algo no login!')}
                    />

                    <TextInput
                        style={style.input}
                        placeholder={'Senha'}
                        onChange={() => console.warn('Digitou algo na senha!')}
                    />

                    <Button
                        style={style.button}
                        onPress={() => this.login()}
                        title="Entrar"
                        color="#006BB4"
                        accessibilityLabel="Botão de login azul"
                    />

                    <Button
                        style={style.button}
                        onPress={() => this.cadastro()}
                        title="Cadastrar"
                        color="#006BB4"
                        accessibilityLabel="Botão de cadastro azul"
                    />
                </View>
            </View>
        );
    }
}
