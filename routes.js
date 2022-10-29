import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "./screens/Dashboard/Dashboard";
import Login from "./screens/Login/Login";
import Payment from "./screens/Payment/Payment";
import QrCode from "./screens/QrCode/QrCode";

const Stack = createNativeStackNavigator()

export default function Router(){
    return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Dashboard" component={Dashboard}/>
            <Stack.Screen name="Payment" component={Payment}/>
            <Stack.Screen name="QrCode" component={QrCode}/>
        </Stack.Navigator>
    </NavigationContainer>
    )
}