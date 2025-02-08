/* eslint-disable quotes */
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Welcome, Login, Signup, Home, QRScan, Api } from "./screens";
import { Provider as PaperProvider } from "react-native-paper";
import BottomNav from "./screens/BottomNav";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="QRScan"
            component={QRScan}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Api"
            component={Api}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="BottomNav"
            component={BottomNav}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
// AppRegistry.registerComponent(appName, () => App);
