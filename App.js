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
  TravelListDetail,
  TravelList,
} from "./src";
import MainLayout from "./src/MainLayout";
import { Easing } from "react-native-reanimated";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";

// const Stack = createNativeStackNavigator();
const Stack = createSharedElementStackNavigator();
const options = () => ({
  gestureEnabled: false,
  headerBackTitleVisible: false,
  transitionSpec: {
    open: {
      animation: "timing",
      config: {
        duration: 400,
        easing: Easing.inOut(Easing.ease),
      },
    },
    close: {
      animation: "timing",
      config: {
        duration: 400,
        easing: Easing.inOut(Easing.ease),
      },
    },
  },
});

cardSrtyleInterpolator: ({ current: { progress } }) => {
  return {
    cardStyle: {
      opacity: progress,
    },
  };
};
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
          <Stack.Screen
            name="TravelListDetail"
            component={TravelListDetail}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TravelList"
            component={TravelList}
            options={options}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
// AppRegistry.registerComponent(appName, () => App);
