import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {SignIn, CreateAccount, Home, Search, Details, Search2, Profile} from "./src/Screen.js"

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const HomeStackScreen = () =>(
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home} />
    <HomeStack.Screen name="Details" component={Details} 
    options={({route})=>({
      title: route.params.name
    })}/>
  </HomeStack.Navigator>
);

const SearchStackScreen = () => (
  <SearchStack.Navigator>
    <SearchStack.Screen name="Search" component={Search} />
    <SearchStack.Screen name="Search2" component={Search2} />
  </SearchStack.Navigator>
);

const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={Profile} />
  </ProfileStack.Navigator>
);

const TabsScreen = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeStackScreen}/>
    <Tab.Screen name="Search" component={SearchStackScreen}/>
  </Tab.Navigator>
);

export default function App2() {
  return (
  <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabsScreen}/>
      <Drawer.Screen name="Profile" component={ProfileStackScreen}/>
    </Drawer.Navigator>
        {/* <Stack.Navigator>
            <Stack.Screen name= "SignIn" component={SignIn} options={{title: "Sign In"}}/>
            <Stack.Screen name= "CreateAccount" component={CreateAccount} options={{title: "Create Account"}}/>
        </Stack.Navigator> */}
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});