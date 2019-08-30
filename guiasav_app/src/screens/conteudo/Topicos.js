import React from 'react';

import { View, Button, FlatList } from 'react-native';

const uri = 'http://guiasav.diforg.com.br/ws/';

export default class Topicos extends React.Component {

    constructor() {
        super();
        this.state = {
            topicos: []
        }
    }

    componentWillMount() {

        const { navigation } = this.props;

        const id = navigation.getParam('id', 'no-id');

        this.carregaDados(id);
    }

    carregaDados(id) {
        fetch(uri + 'lista_topico/' + id)
            .then(resposta => resposta.json())
            .then(json => this.setState({ topicos: json }));
    }

    goToConteudo(item) {
        this.props.navigation.navigate('Conteudo', { dados: item });
    }

    render() {

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <FlatList
                    data={this.state.topicos}
                    keyExtractor={item => item.cd_topic}
                    renderItem={({ item }) =>
                        <Button
                            onPress={() => this.goToConteudo(item)}
                            title={item.nm_topic}
                            color={"#841584"}
                            accessibilityLabel={item.nm_topic}
                        />
                    }
                />
            </View>
        );
    }
}

Topicos.navigationOptions = {
    title: 'Tópicos'
}
