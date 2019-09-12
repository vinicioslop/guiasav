import React from 'react';

import { View, Text, ScrollView, FlatList, TouchableHighlight } from 'react-native';

import style from './css/style';

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

  goToTopics(id) {
    this.props.navigation.navigate('Topicos', { id: id });
  }

  render() {
    return (
      <ScrollView style={style.view}>
        <FlatList
          data={this.state.categorias}
          keyExtractor={item => item.nm_category}
          renderItem={({ item }) =>
            <TouchableHighlight onPress={() => this.goToTopics(item.cd_category)}>
              <View style={style.botao}>
                <Text style={style.contBotao}>{item.nm_category}</Text>
              </View>
            </TouchableHighlight>
          }
        />
      </ScrollView>
    );
  }
}

Categorias.navigationOptions = {
  title: 'Categorias',
}
