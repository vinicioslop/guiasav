import React, { Component } from 'react';

import { View, StyleSheet, Button, FlatList, Text } from 'react-native';

export default class Lista extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categorias: [],
            carregado: 'false',
            topico: [],
            topic: 'false'
        }
    }

    carregaDados() {

        fetch('http://guiasav.diforg.com.br/ws/lista_categoria')
            .then(resposta => resposta.json())
            .then(json => this.setState({ categorias: json, carregado: 'true' }));
    }

    goToTopico() {
        
    }

    render() {
        return (
            <View style={styles.container}>

                {
                    this.state.carregado === 'true' && this.state.topic === 'false' ? null :
                    <Button
                        onPress={this.carregaDados.bind(this)}
                        title={"Carrega Dados"}
                        color={"#841584"}
                        accessibilityLabel={"Carregamento de Dados"}
                    />
                }

                {
                    this.state.carregado === 'false' && this.state.topic === 'false' ? null :
                        <FlatList
                            data={this.state.categorias}
                            keyExtractor={item => item.cd_category}
                            renderItem={({ item }) =>
                                <View>
                                    <Button
                                        onPress={this.goToTopico}
                                        title={item.nm_category}
                                        color={"#841584"}
                                        accessibilityLabel={item.nm_category}
                                    />
                                    <Text>
                                        {item.nm_category}
                                    </Text>
                                </View>
                            }
                        />
                }

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        
    }
});
