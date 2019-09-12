import React from 'react';

import { View, Text, TextInput, Button } from 'react-native';

import style from './auth-css/style';

export default class Sign extends React.Component {

    constructor() {
        super();
        this.state = {
            nome: '',
            email: '',
            senha: ''
        }
    }

    login() {
        this.props.navigation.pop();
    }

    render() {
        return (
            <View style={style.view}>
                <View style={style.form}>
                    <Text style={style.titulo}>Tela de Cadastro</Text>

                    <TextInput
                        style={style.input}
                        placeholder={'Nome'}
                        onChange={(text) => this.setState({ nome: text })}
                    />

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
                        title="Criar conta"
                        color="#006BB4"
                        accessibilityLabel="Criar conta"
                    />
                </View>
            </View>
        );
    }
}
