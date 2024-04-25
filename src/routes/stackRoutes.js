import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import Detalhes from '../pages/Detalhes';
import Sobre from '../pages/Sobre';
import Contato from '../pages/Contato';

const Stack = createNativeStackNavigator();

export default function StackRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='Home'
                component={Home}
            />

            <Stack.Screen
                name='Detalhes'
                component={Detalhes}
            />

            <Stack.Screen
                name='Sobre'
                component={Sobre}
            />
            <Stack.Screen
                name='Contato'
                component={Contato}
            />
        </Stack.Navigator>
    )
}

