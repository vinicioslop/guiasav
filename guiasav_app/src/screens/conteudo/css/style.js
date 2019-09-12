import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    view: {
        flex: 1,
        position: 'relative',
        paddingHorizontal: 25
    },
    botao: {
        position: 'relative',
        borderRadius: 40,
        height: 35,
        width: 290,
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: '#00AA44'
    },
    contBotao: {
        fontSize: 15,
        color: 'black'
    }
});

export default style;
