import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../components/screens/home';
import Login from '../components/screens/login';
import Register from '../components/screens/register';

const Stack = createNativeStackNavigator();

const homeScreenOptions = {
  headerLeft: () => null,
  title: '',
  headerTintColor: '#fff',
  headerTransparent: true,
};

export const LoginScreen = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export const HomeScreen = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={homeScreenOptions} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};
