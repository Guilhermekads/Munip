import {Ionicons, FontAwesome5} from '@expo/vector-icons'
import {Container, UpperView, UserIconView, OptionsIcon, TextWelcome, TotalBalence, AccountView, Subtitle, BalanceTotal, BalanceTotalNotVisible, OptionView, OptionText, OptionIcon, Recents, RecentsText, FooterOptions, FooterOptionsText, FooterOptionsView} from './Dashboard.styles'
import { ScrollView, TouchableOpacity, View} from "react-native";
import React, { useState } from 'react';

import {carbs} from '../../Api/User.Api'

export default function Dashboard({navigation}) {

    const [showBalence,setShowBalence] = useState(false)
    
    return (
        <>
    <Container>
        <UpperView>
            <UserIconView>
                <Ionicons name="person-outline" size={27} color='#000'/>
            </UserIconView>
            <OptionsIcon>
                <TouchableOpacity onPress={() => setShowBalence(!showBalence)}>
                    {showBalence ? (
                    <Ionicons name="eye-outline" size={27} color='#000' style={{marginRight:30}}/>
                    ) : (
                    <Ionicons name="eye-off-outline" size={27} color='#000' style={{marginRight:30}}/>
                    )}

                </TouchableOpacity>
                    <Ionicons name="help-circle-outline" size={27} color='#000' style={{marginRight:8}}/>
                    <Ionicons name="mail-outline" size={27} color='#000' style={{marginRight:8}}/>
            </OptionsIcon>
        </UpperView>
        <TextWelcome>
        Olá, Ficiencias
        </TextWelcome>
    </Container>

    <TotalBalence>
            <AccountView>
                <Subtitle>Conta</Subtitle>

                <Ionicons name="chevron-forward-outline" size={25} color="#908D91"/>
            </AccountView>
            
            {showBalence ? (
            <BalanceTotal>125 carbs</BalanceTotal>
            ):(
            <BalanceTotalNotVisible/>
            )}
    </TotalBalence>

    <View>
        <ScrollView horizontal>
            <OptionView>
                <OptionIcon>
                <Ionicons name="qr-code-outline" size={40} color="#000" onPress={()=> navigation.navigate('QrCode')}/>
                </OptionIcon>
                <OptionText>Qr-Code</OptionText>
            </OptionView>
            <OptionView>
                <OptionIcon>
                <Ionicons name="exit-outline" size={40} color="#000"  onPress={ () => navigation.navigate('Payment')}/>
                </OptionIcon>
                <OptionText>Pagar</OptionText>
            </OptionView>
            <OptionView>
                <OptionIcon>
                <Ionicons name="cash-outline" size={40} color="#000" />
                </OptionIcon>
                <OptionText>Transferir</OptionText>
            </OptionView>
        </ScrollView>
        </View>

            <Recents>
                <Ionicons name="time-outline" size={45} style={{margin:5, marginLeft:35}}/>
                <RecentsText>Histórico de transferências</RecentsText>
            </Recents>


        <View>
            <FooterOptions>
                <FooterOptionsView>
                    <Ionicons name='help-circle-outline'size={50}/>
                    <FooterOptionsText>FAQ</FooterOptionsText>
                </FooterOptionsView>
            
                <FooterOptionsView>
                    <Ionicons name='cart-outline' size={50}/>
                    <FooterOptionsText>Marketplace</FooterOptionsText>
                </FooterOptionsView>
            </FooterOptions>
        </View>
    </>
  );
}

