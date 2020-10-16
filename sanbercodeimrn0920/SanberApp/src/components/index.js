import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Login from './login';
import Register from './register';
import About from './about';
import SkillScreen from './skillScreen';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Index = () =>{
    // <NavigationContainer>
    //     <Stack.Navigator>
    //         <Stack.Screen name= "Login" component={Login}/>
    //         {/* <Stack.Screen name= "Register" component={Register}/> */}
    //     </Stack.Navigator>
    // </NavigationContainer>
    // return(
        
    //     <Text>Test</Text>
    // )
}

export default Index;

const styles = StyleSheet.create({

})