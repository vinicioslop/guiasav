import React, {Component} from 'react';

import { View, Text, StyleSheet, Dimensions } from 'react-native';

import Lista from '../components/Lista';

const { width, height } = Dimensions.get('window');

export default class Inicio extends Component {
    render(){
        return(
            <View>
                <View style={styles.header}>
                    <Text style={styles.header_text}>Início</Text>
                </View>
                <View style={styles.body}>
                    <Lista/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#5D5D5D',
        padding: 20,
        borderStyle: "solid",
        borderColor: '#000000',
        borderWidth: 3
    },
    header_text: {
        fontSize: 35,
        textAlign: "center"
    },
    body: {
        
    }
});
