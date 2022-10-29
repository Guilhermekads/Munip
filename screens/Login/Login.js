import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { LoginContainer, LoginTopContainer, LoginLogo, LoginBottom, LoginMessage, LoginForm, LoginInput, LoginButton, LoginButtonText } from './Login.styles';

const Login = ({navigation}) => {
    

  return(
    <LoginContainer>
        <LoginTopContainer>
            <LoginLogo source={{uri: 'https://www.munip.com.br/static/media/logo1.af0ea80fbe5358e7e3f0.png',}} />
        </LoginTopContainer>
        <LoginBottom>
            <LoginMessage>Seja bem vindo!</LoginMessage>
            <LoginForm>
                <LoginInput placeholder='Digite seu CPF...'/>
                <LoginInput secureTextEntry={true} placeholder='Digite sua senha...'/>
                <LoginButton onPress={()=> navigation.navigate('Dashboard')}>
                    <LoginButtonText >Entrar</LoginButtonText>
                </LoginButton>
            </LoginForm>
        </LoginBottom>
    </LoginContainer>
  )
}

export default Login;