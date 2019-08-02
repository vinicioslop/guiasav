import React, { Component } from 'react';

import { View, Button, FlatList, ScrollView } from 'react-native';

const uri = 'http://guiasav.diforg.com.br/ws';

export default class Lista extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categorias: []
        }
    }

    componentDidMount(){
        fetch(uri + '/lista_categoria')
            .then(resposta => resposta.json())
            .then(json => this.setState({ categorias: json, carregado: 'true' }));
    }

    listaTopico(id) {
        fetch('http://guiasav.diforg.com.br/ws/lista_topico/' + id)
            .then(resposta => resposta.json())
            .then(json => this.setState({ topicos: json, topic: 'true' }));
    }

    render() {
        return (
            <View>

                <FlatList
                    data={this.state.categorias}
                    keyExtractor={item => item.cd_category}
                    renderItem={({ item }) =>
                        <ScrollView>
                            <Button
                                onPress={this.listaTopico(item.cd_category)}
                                title={item.nm_category}
                                color={"#841584"}
                                accessibilityLabel={item.nm_category}
                            />
                        </ScrollView>
                    }
                />

            </View>
        );
    }
}

