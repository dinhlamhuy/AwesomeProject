

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Welcome, Login, Signup, Home, QRScan } from './screens';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name="Welcome" component={Welcome}
          options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home}
          options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login}
          options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={Signup}
          options={{ headerShown: false }} />
        <Stack.Screen name="QRScan" component={QRScan}
          options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


