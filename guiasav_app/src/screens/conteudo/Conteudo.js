// src/Conteudo.js

import React from 'react';

import { ScrollView } from 'react-native';

import HTML from 'react-native-render-html';

export default class Conteudo extends React.Component {

    constructor() {
        super();
        this.state = {
            conteudo: [],
            html: ''
        }
    }

    componentWillMount() {
        const { navigation } = this.props;

        const dados = navigation.getParam('dados', 'no-data');

        this.adicionaDados(dados);
    }

    adicionaDados(dados) {
        this.setState({ topicos: dados, html: dados.nm_content })
    }

    render() {
        return (
            <ScrollView style={{ flex: 1 }}>
                <HTML html={this.state.html} />
            </ScrollView>
        );
    }
}

Conteudo.navigationOptions = {
    title: 'Conteudo',
}
