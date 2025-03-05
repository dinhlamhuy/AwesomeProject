/* eslint-disable quotes */
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Provider as PaperProvider } from "react-native-paper";
import {
  Api,
  Home,
  Login,
  QRScan,
  Signup,
  Welcome,
  SettingsScreen,
  ProfileScreen,
  PokemonInfo,
  Pokemon,
  TestSVG,
} from "./src";
import MainLayout from "./src/MainLayout";

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
            name="MainLayout"
            component={MainLayout}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SettingsScreen"
            component={SettingsScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ProfileScreen"
            component={ProfileScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PokemonInfo"
            component={PokemonInfo}
            options={{ headerShown: false }}
            initialParams={{ id: 1 }}
          />
          <Stack.Screen
            name="Pokemon"
            component={Pokemon}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TestSVG"
            component={TestSVG}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
// AppRegistry.registerComponent(appName, () => App);
