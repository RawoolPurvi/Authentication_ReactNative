import React from "react";
import {View, Text} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from "../screens/Homescreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignUpScreen";
import WelcomeScreen from "../screens/WelcomeScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome">
                <Stack.Screen name="Welcome" options={{headerShown: false}} component={WelcomeScreen} />
                <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} />
                <Stack.Screen name="Signup" options={{headerShown: false}} component={SignupScreen} />
                <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}