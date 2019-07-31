import React, { Component } from 'react';

import { View, StyleSheet, Button, FlatList, Text, TouchableHighlight, ScrollView } from 'react-native';

const uri = 'http://guiasav.diforg.com.br/ws';

export default class Lista extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categorias: [],
            carregado: 'false',
            topicos: [],
            topic: 'false'
        }
    }

    carregaDados() {
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
                    this.state.carregado === 'false' && this.state.topic === 'true' ? null :
                        <FlatList
                            data={this.state.categorias}
                            keyExtractor={item => item.cd_category}
                            renderItem={({ item }) =>
                                <ScrollView>
                                    <TouchableHighlight onPress={this.listaTopico(item.cd_category)} style={styles.categorias}>
                                        <Text style={styles.categoriaItem}>{item.nm_category}</Text>
                                    </TouchableHighlight>
                                </ScrollView>
                            }
                        />
                }

                {
                    /*
                    this.state.topic === 'false' ? null :
                    <FlatList
                        data={this.state.topicos}
                        keyExtractor={item => item.cd_topic}
                        renderItem={({ item }) =>
                            <ScrollView>
                                <TouchableHighlight onPress={this.listaTopico(item.cd_category)} style={styles.categorias}>
                                    <Text style={styles.categoriaItem}>{item.nm_topic}</Text>
                                </TouchableHighlight>
                            </ScrollView>
                        }
                    />
                    */
                }

            </View>
        );
    }
}

const styles = StyleSheet.create({
    categorias: {
        alignItems: 'center'
    },
    categoriaItem: {
        fontWeight: 'bold',
        fontSize: 20,
        
    }
});
