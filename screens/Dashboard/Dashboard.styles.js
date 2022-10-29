import { Dimensions } from "react-native";

import styled from "styled-components/native";

const {width} = Dimensions.get('window')

export const Container = styled.View`
    width: 100%;
    height: 20%;

    padding: 40px 24px 8px 24px;

    background-color: #00ff55;
    justify-content: space-around;


`

export const UpperView = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const UserIconView = styled.View`
    height: 40px;
    width: 40px;

    align-items: center;

    padding: 5px;
    border-radius: 25px;

    background-color: #2dd865;
`

export const OptionsIcon = styled.View`
    
    flex-direction: row;
   
`

export const TextWelcome = styled.Text`
    color: #000;
    font-size: 16px;
    font-weight:300;
    font-size:  22px;
`

export const TotalBalence = styled.View`
    padding: 25px;
` 
export const AccountView = styled.View`
    flex-direction: row;
    justify-content: space-between;
`
export const Subtitle = styled.Text`
    font-size: 16px;
    font-weight: 400;

    margin-bottom: 8px;
`

export const BalanceTotal = styled.Text`
    font-size: 23px;
    font-weight: 500;

    margin-bottom: 8px;
`

export const BalanceTotalNotVisible = styled.View`
    margin-top: 8px;

    height: 30px;
    width: 70%;

    background-color: #D4D4D4;

    border-radius: 2px;
`
export const OptionView = styled.TouchableOpacity`
    align-items: center;
    align-content: center;

    margin-left: 41px;

`
export const OptionText = styled.Text`
    font-weight: 600;
    font-size: 14px;

`
export const OptionIcon = styled.View`

    height: ${width * 0.20}px;
    width: ${width * 0.20}px;

    background-color: #00ff55;

    border-radius: 50px;

    
    justify-content: center;
    align-items: center;
`

export const Recents = styled.View`
    margin: 5px;
    margin-top: 50px;
    
    width: 97.5%;
    height: 60px;
    


    border-radius: 10px;

    background-color: #00ff55;

    flex-direction: row;
`

export const RecentsText = styled.Text`
    margin: 16px;

    font-size: 17px;
    font-weight: 500;
`

export const FooterOptions = styled.View`

    flex-direction: row;
    justify-content: space-around;

    margin-top: 50px;
`

export const FooterOptionsText = styled.Text`

`

export const FooterOptionsView = styled.View`
    width: 40%;
    height: 85%;
    border-radius: 15px;

    align-items: center;
    justify-content: center;

    background-color: #00ff55;

`