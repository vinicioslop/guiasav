import React, {Component} from 'react';

import { Button } from 'react-native';

export default class Botao extends Component {
    render(){
        return(

            /**
             * Gera o botão mas precisa de algumas alterações,
             * foi separado para ter um estilo diferente dos
             * demais em caso de muita repetição.
             */

            <Button {...this.props} />
        );
    }
}
