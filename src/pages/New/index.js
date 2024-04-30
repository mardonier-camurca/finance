import React from 'react';
import { 
    Background, 
    Input, 
    SubmiteButton 
} from './styles';

import { SafeAreaView } from 'react-native';

import Header from '../../components/Header'

export default function New(){
    return(
        <Background>
            <Header title='Registrando'/>

            <SafeAreaView>
                <Input
                    placeholder='Descrição do registro'
                />
                <Input
                    placeholder='Valor desejado'
                    keyboardType='numeric'
                />

                <SubmiteButton>

                </SubmiteButton>

            </SafeAreaView>
        </Background>

    )
}