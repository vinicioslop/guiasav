import React from 'react';

import { ScrollView, FlatList, Text, StyleSheet } from 'react-native';

const uri = 'http://guiasav.diforg.com.br/ws/';

export default class Forum extends React.Component {

    constructor() {
        super();
        this.state = {
            forum: []
        }
    }

    componentDidMount() {
        fetch(uri + 'forum')
            .then(resposta => resposta.json())
            .then(json => this.setState({ forum: json }));
    }

    render() {
        return (
            <ScrollView style={style.scrollView}>
                <FlatList
                    data={this.state.forum}
                    keyExtractor={item => item.nm_forum}
                    renderItem={({ item }) =>
                        <Text style={style.categorias}>{item.nm_forum}</Text>
                    }
                />
            </ScrollView>
        );
    }
}

const style = StyleSheet.create({
    scrollView: {
        flex: 1
    },
    categorias: {
        fontSize: 12,

    }
});

Forum.navigationOptions = {
    title: 'Fórum',
}
