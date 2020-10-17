import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Splash from "./screens/splash";
import SignUp from "./screens/signUp";
import SignIn from "./screens/signIn";
import Home from "./screens/home";

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const SignInStack = createStackNavigator();
const SignUpStack = createStackNavigator();
const SplashStack = createStackNavigator();
const HomeStack = createStackNavigator();

const SignInStackScreen = () =>(
    <SignInStack.Navigator>
      <SignInStack.Screen name="SignIn" component={SignIn} />
    </SignInStack.Navigator>
);
const SignUpStackScreen = () =>(
    <SignUpStack.Navigator>
      <SignUpStack.Screen name="SignUp" component={SignUp} />
    </SignUpStack.Navigator>
);
const SplashStackScreen = () =>(
    <SplashStack.Navigator>
      <SplashStack.Screen name="Splash" component={Splash} />
    </SplashStack.Navigator>
);
const HomeStackScreen = () =>(
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
);

const TabsScreen = () => (
    <Tab.Navigator>
        <Tab.Screen name="SignUp" component={SignUpStackScreen} options={{ headerShown: false }}/>
        <Tab.Screen name="SignIn" component={SignInStackScreen} options={{ headerShown: false }}/>
    </Tab.Navigator>
);
export default () =>(
    // <Splash/>
    <NavigationContainer>
        <Stack.Navigator  initialRouteName="Splash" >
        {/* <Stack.Navigator > */}
            <Stack.Screen name= "SignUp" component={TabsScreen} options={{ headerShown: false }}/>
            <Stack.Screen name= "Home" component={HomeStackScreen} options={{ headerShown: false }}/>
            <Stack.Screen name= "Splash" component={SplashStackScreen} options={{ headerShown: false }}/>
        </Stack.Navigator>
    </NavigationContainer>
)