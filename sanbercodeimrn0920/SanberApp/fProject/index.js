import React from 'react';
import { StyleSheet, View, ActivityIndicator, FlatList, Text, TouchableOpacity, Image } from 'react-native';
import { Home, ArticleDetails, Welcome } from './pages';
import Name from './pages/testname';
import { Provider } from 'react-redux';
import store from './store';

// import Splash from "./screens/splash";

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const HomeStack = createStackNavigator();
const ArticleStack = createStackNavigator();
const WelcomeStack = createStackNavigator();

// const SplashStackScreen = () =>(
//     <SplashStack.Navigator>
//       <SplashStack.Screen name="Splash" component={Splash} />
//     </SplashStack.Navigator>
// );
const WelcomeStackScreen = () => (
	<WelcomeStack.Navigator>
		<WelcomeStack.Screen name="Welcome" component={Welcome} />
	</WelcomeStack.Navigator>
);
const HomeStackScreen = () => (
	<HomeStack.Navigator>
		<HomeStack.Screen name="Home" component={Home} />
	</HomeStack.Navigator>
);
const ArticleStackScreen = () => (
	<ArticleStack.Navigator>
		<ArticleStack.Screen name="Article" component={ArticleDetails} />
	</ArticleStack.Navigator>
);
// const TabsScreen = () => (
//     <Tab.Navigator>
//         <Tab.Screen name="SignUp" component={SignUpStackScreen} options={{ headerShown: false }}/>
//         <Tab.Screen name="SignIn" component={SignInStackScreen} options={{ headerShown: false }}/>
//     </Tab.Navigator>
// );
export default () => (
	<Provider store={store}>
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={HomeStackScreen} />
				<Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
				<Stack.Screen name="Name" component={Name} options={{ headerShown: false }} />
				<Stack.Screen name="Details" component={ArticleStackScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	</Provider>
);
