import React, { useState, useContext } from 'react';
import { Platform, ActivityIndicator } from 'react-native';

import { 
    Background, 
    Container, 
    Logo, 
    AreaInput, 
    Input, 
    SubmitButton, 
    SubmitText, 
    Link, 
    LinkText
} from './styles';

import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';

export default function SignIn(){
    const navigation = useNavigation();
    const { signIn, loadingAuth } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


function handleLogin(){
    signIn(email, password)
}

    return(
        <Background>
            <Container
                behavior={Platform.OS === 'ios' ? 'padding' : ''}
                anabled
            >
                <Logo
                    source={require('../../assets/Logo.png')}
                />

                <AreaInput>
                    <Input
                    placeholder='Digite seu email...'
                    value={email}
                    onChangeText={ (text) => setEmail(text)}
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                    placeholder='Digite sua senha...'
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    />
                </AreaInput>

                <SubmitButton activeOpacity={0.8} onPress={handleLogin}>
                    {
                    loadingAuth ? (
                        <ActivityIndicator size={25} color='#FFF'/>
                    ) : (
                        <SubmitText>Acessar</SubmitText>
                        )
                    }
                </SubmitButton>

                <Link onPress={ () => navigation.navigate('SignUp')}>
                    <LinkText>Criar uma conta!</LinkText>
                </Link>

            </Container>
        </Background>
    )
}
