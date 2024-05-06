import React, { useContext, useState } from 'react';
import { Platform, ActivityIndicator } from 'react-native';
import { 
    Background, 
    Container, 
    AreaInput, 
    Input, 
    SubmitButton, 
    SubmitText 
} from '../SignIn/styles'
import { AuthContext } from '../../contexts/auth';

export default function SignUp(){
    const { signUp, loadingAuth } = useContext(AuthContext)
    const [nome, setNome ] = useState('');
    const [email, setEmail ] = useState('');
    const [password, setPassword ] = useState('');
    
    function handleSignUp(){
        if(nome === '' || email === '' || password === '') return;
        signUp(nome, email, password);
    }

    return(
        <Background>
            <Container
                behavior={Platform.OS === 'ios' ? 'padding' : ''}
                anabled
            >
                <AreaInput>
                    <Input
                        placeholder='Nome...'
                        value={nome}
                        onChangeText={ (text) => setNome(text) }
                        />
                </AreaInput>
                
                <AreaInput>
                    <Input
                        placeholder='Email...'
                        value={email}
                        onChangeText={ (text) => setEmail(text) }
                        />
                </AreaInput>
                
                <AreaInput>
                    <Input
                        placeholder='Senha'
                        value={password}
                        onChangeText={ (text) => setPassword(text) }
                        secureTextEntry={true}
                    />
                </AreaInput>

                <SubmitButton onPress={handleSignUp}>
                    {
                        loadingAuth ? (
                            <ActivityIndicator size={25} color='#FFF'/>
                        ) : (
                            <SubmitText>Cadastrar</SubmitText>
                        )
                    }
                </SubmitButton>
            </Container>
        </Background>
    )
}
