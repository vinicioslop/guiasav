import React, {Component} from 'react';

import { View, FlatList, Text, StyleSheet, Button } from 'react-native';

export default class Lista extends Component {

    constructor(props){
        super(props);
        this.state = {
            categorias: [],
            msg: ''
        }
    }

    carregaDados(){

        fetch('http://guiasav.diforg.com.br/ws/lista_categoria')
            .then(resposta => resposta.json())
            .then(json => this.setState({categorias: json}))
    }
    render(){
        return(
            <View style={styles.container}>
                <Button
                    onPress={this.carregaDados.bind(this)}
                    title="Carregar Dados"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
                <FlatList style={styles.lista}
                    keyExtractor={item => item.cd_category}
                    data={this.state.categorias}
                    renderItem={ ({item}) =>
                        <Button
                            onPress={console.warn('Clique')}
                            title={item.nm_category}
                            color="#841584"
                            accessibilityLabel="Learn more about this purple button"
                        />
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    },
    
});
