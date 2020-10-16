import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Login from "./components/login";
import About from "./components/about";
import SkillScreen from "./components/skillScreen";
import Project from "./components/project";
import Add from "./components/add";

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const LoginStack = createStackNavigator();
const AboutStack = createStackNavigator();
const SkillStack = createStackNavigator();
const ProjectStack = createStackNavigator();
const AddStack = createStackNavigator();
const LoginStackScreen = () =>(
    <LoginStack.Navigator>
      <LoginStack.Screen name="Login" component={Login} />
    </LoginStack.Navigator>
);

const AboutStackScreen = () =>(
    <AboutStack.Navigator>
      <AboutStack.Screen name="About" component={About} />
    </AboutStack.Navigator>
);

const SkillStackScreen = () =>(
    <SkillStack.Navigator>
        <SkillStack.Screen name="SkillScreen" component={SkillScreen} />
    </SkillStack.Navigator>
);

const ProjectStackScreen = () =>(
    <ProjectStack.Navigator>
        <ProjectStack.Screen name="Project" component={Project} />
    </ProjectStack.Navigator>
);
const AddStackScreen = () =>(
    <AddStack.Navigator>
      <AddStack.Screen name="Add" component={Add} />
    </AddStack.Navigator>
);
const OptionsScreen = () => (
    <Tab.Navigator>
        <Tab.Screen name="Skill" component={SkillStackScreen}/>
        <Tab.Screen name="Project" component={ProjectStackScreen}/>
        <Tab.Screen name="Add" component={AddStackScreen}/>
    </Tab.Navigator>
);

const TabsScreen = () => (
    <Tab.Navigator>
        <Tab.Screen name="About" component={AboutStackScreen}/>
        <Tab.Screen name="Options" component={OptionsScreen}/>
    </Tab.Navigator>
);

export default () =>(
    <NavigationContainer>
        <Drawer.Navigator>
            <Drawer.Screen name="Login" component={LoginStackScreen}/>
            <Drawer.Screen name="About" component={TabsScreen}/>
        </Drawer.Navigator> 
        {/* <Stack.Navigator>
            <Stack.Screen name= "Login" component={LoginStackScreen}/>
            <Stack.Screen name= "Drawer" component={DrawerScreen}/>
        </Stack.Navigator> */}
    </NavigationContainer>
)