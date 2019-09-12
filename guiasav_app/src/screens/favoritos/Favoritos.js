import React from 'react';

import { View, Text } from 'react-native';

import style from './css/style';

export default class Favoritos extends React.Component {
    render(){
        return(
            <View style={style.view}>
                <Text style={style.text}>Favoritos</Text>
            </View>
        );
    }
}

Favoritos.navigationOptions = {
    title: 'Favoritos'
  }
