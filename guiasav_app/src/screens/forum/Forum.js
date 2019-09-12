import React from 'react';

import { ScrollView, FlatList, Text } from 'react-native';

import style from './css/style';

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

Forum.navigationOptions = {
    title: 'Fórum',
}
