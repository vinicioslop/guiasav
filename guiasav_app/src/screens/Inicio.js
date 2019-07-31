import React, {Component} from 'react';

import { View, Text, StyleSheet } from 'react-native';

import Lista from '../components/Lista';

export default class Inicio extends Component {
    render(){
        return(
            <View>
                
                {/*
                    <View style={styles.header}>
                        <Text style={styles.header_text}>Início</Text>
                    </View>
                */}
                
                <View>
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
