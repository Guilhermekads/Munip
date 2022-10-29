import React from 'react';


import useForm from '../../hooks/useForm';
import validate from '../../hooks/validateInfo';

import logo from '../../images/logo1.png'

import {IoMailOutline, IoLockClosedOutline, IoPersonOutline, IoPersonAddOutline, IoDocumentTextOutline} from 'react-icons/io5'

import { SignupContainer, SignupLogo, SignupTop, SingupFormRight, SignupBottom, SignupButton, SignupInputs, SignupForm, SignupFormLeft, SignupMessage, Input, Icons} from './SignupElements';


const Signup = ({submitForm}) => {

    const {handleChange, values, handleSubmit, errors} = useForm(submitForm,validate)


  return(
    <SignupContainer>
        <SignupTop>
            <SignupLogo src={logo}/>
        </SignupTop>
        <SignupBottom>
            <SignupMessage>Olá, seja bem vindo!</SignupMessage>
            <SignupForm method='post' onSubmit={handleSubmit} noValidate>
                <SignupInputs>
                <SignupFormLeft>
                    <Icons><IoPersonOutline/></Icons><Input type='text' name='name' id='name' placeholder='Seu nome...' value={values.name} onChange={handleChange}/>{errors.name && <p className='error'>{errors.name}</p>}
                    <Icons><IoPersonAddOutline/></Icons><Input type='text' name='SecondName' id='SecondName' placeholder='Seu Sobrenome...' value={values.SecondName} onChange={handleChange} />{errors.SecondName && <p className='error'>{errors.SecondName}</p>}
                    <Icons><IoDocumentTextOutline/></Icons><Input type='text' name='cpf' id='cpf' placeholder='Seu CPF...' value={values.cpf} onChange={handleChange}/>{errors.cpf && <p className='error'>{errors.cpf}</p>}
                    
                </SignupFormLeft>
                <SingupFormRight>
                    <Icons><IoMailOutline/></Icons><Input type='email' name='email' id='email' placeholder='Seu email...' value={values.email} onChange={handleChange}/>{errors.email && <p className='error'>{errors.email}</p>}
                    <Icons><IoLockClosedOutline/></Icons><Input type='password' name='password' id='password' placeholder='Digite uma senha...' value={values.password} onChange={handleChange}/>{errors.password && <p className='error'>{errors.password}</p>}
                </SingupFormRight>
                </SignupInputs>
                <SignupButton type='submit'>Enviar</SignupButton>
            </SignupForm>
        </SignupBottom>
    </SignupContainer>
  )
}

export default Signup;