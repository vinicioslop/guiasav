import React from 'react';

import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

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
