import styled from "styled-components/native";

export const LoginContainer = styled.View`
    width: 100%;
    height: 100%;
    flex: 1;
    background-color: #010606;
`

export const LoginTopContainer = styled.View`
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 35%;
    
`

export const LoginLogo = styled.Image`
    width: 300px;
    height: 90px;

`

export const LoginBottom = styled.View`
    width: 100%;
    height: 65%;
    background-color: #56CD54;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    `

export const LoginMessage = styled.Text`
    color: #fff;
    position: absolute;
    padding: 15px;
    font-size: 25px;
    
`
export const LoginForm = styled.View`
    margin-top: 40%;
    margin-bottom: auto;
    align-items: center;
`

export const LoginInput = styled.TextInput`
    width: 270px;
    height: 50px;
    background-color: #fff;
    border-radius: 10px;
    margin-top: 5px;
    padding-left: 20px;
`

export const LoginButton = styled.TouchableOpacity`
    width: 150px;
    height: 40px;
    background-color:   #03581f;
    border-radius: 20px;
    margin-top: 50px;
`

export const LoginButtonText = styled.Text`
    font-size: 18px;
    color: #fff;
    padding: 5px;
    padding-left: 45px;
`