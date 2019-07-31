import React, { Component } from 'react';

import { FlatList } from 'react-native';

import Botao from './Botao';

export default class Botoes extends Component {
    render() {
        return (

            //Lista funcional, mas precisa de algumas alterações

            <FlatList
                data={this.props.dados}
                keyExtractor={item => item.cd_category}
                renderItem={({ item }) =>
                    <Botao
                        onPress={this.goToTopico}
                        title={item.nm_category}
                        color={"#841584"}
                        accessibilityLabel={item.nm_category}
                    />
                }
            />
        );
    }
}
