import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../components/screens/home';
import Login from '../components/screens/login';
import Register from '../components/screens/register';

const Stack = createNativeStackNavigator();

export const LoginScreen = () => {
	return (
		<NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Register" component={Register} />
            </Stack.Navigator>
        </NavigationContainer>
	);
};

export const HomeScreen = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Login" component={LoginScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
