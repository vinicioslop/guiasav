import React from 'react';

import { View, TextInput } from 'react-native';

export default class Login extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(text) => console.log("Digitou: " + text)}
                    value={this.state.text}
                />
            </View>
        );
    }
}
