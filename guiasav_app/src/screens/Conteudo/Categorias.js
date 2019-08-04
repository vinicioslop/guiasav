// src/Categorias.js

import React from 'react';

import { View, Button, FlatList } from 'react-native';

const uri = 'http://guiasav.diforg.com.br/ws/';

export default class Categorias extends React.Component {

    constructor() {
        super();
        this.state = {
            categorias: []
        }
    }

    componentDidMount() {
        fetch(uri + 'lista_categoria')
            .then(resposta => resposta.json())
            .then(json => this.setState({ categorias: json }));
    }

    goToTopics(id, name) {
        this.props.navigation.navigate('Topicos', {id: id, name: name});
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <FlatList
                    data={this.state.categorias}
                    keyExtractor={item => item.cd_category}
                    renderItem={({ item }) => 
                        <View>
                            <Button
                                onPress={() => this.goToTopics(item.cd_category, item.nm_category)}
                                title={item.nm_category}
                                color={"#841584"}
                                accessibilityLabel={item.nm_category}
                            />
                        </View>
                    }
                />
            </View>
        );
    }
}

Categorias.navigationOptions = {
    title: 'Categorias',
}
