
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { LoginScreen } from './src/navigation'

const App = () => {
  return (
    <NavigationContainer>
      <LoginScreen/>
    </NavigationContainer>
  );
};

export default App;
