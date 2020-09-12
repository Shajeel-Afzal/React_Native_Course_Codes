import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {Stack} from './src/Navigation';  
import { Login } from './src/screens/Login';
import { Register } from './src/screens/Register';


const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
