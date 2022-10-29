import styled from "styled-components";

export const SignupContainer = styled.div`
    background: #010606;
    width: 100%;
    height: 100vh;
`

export const SignupTop = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    height: 30vh;
`

export const SignupLogo = styled.img`
    display: flex;
    width: 25rem;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2rem;
    margin-bottom: auto;

    @media screen and (max-width: 768px){
        width: 20rem;
    }
`

export const SignupBottom = styled.div`
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 100%;
    height: 70vh;
    z-index: 10;
    background: #56CD54;
`

export const SignupMessage = styled.h1`
    margin: 2rem;
    position: static;
    font-size: 20px;
    color: #fff;
    width: 15rem;
`

export const SignupForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: auto;
    margin-bottom: auto;
`

export const SignupFormLeft = styled.div`
    width: 220px;
`

export const SingupFormRight = styled.div`
    width: 220px;
    margin-left: 2rem;

    @media screen and (max-width: 768px){
        margin-left: 0;
    }
`

export const SignupButton = styled.button`
    width: 200px;
    height: 40px;
    margin-top: 2rem;
    border: none;
    background: #03581f;
    color: #fff;
    border-radius: 20px;
    font-size: 15px;
    font-weight: bold;
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:hover{
        transform: scale(1.03);
    }
`

export const Input = styled.input`
    margin: 0.3em;
    border-radius: 10px;
    border: none;
    width: 220px;
    height: 40px;
    padding: 10px;
    outline:0;
    padding-left: 35px;
`

export const SignupInputs = styled.div`
    display: flex;

    @media screen and (max-width: 768px){
        display: block;
    }
`

export const InputsDiv = styled.div`
    display: flex;
`

export const Icons = styled.span`
    position: absolute;
    margin: 1rem;
`

export const SignupForgot = styled.a`
    text-decoration: none;
    color: #fff;
    margin-top: 2rem;
    font-weight: bold;
    cursor: pointer;
`