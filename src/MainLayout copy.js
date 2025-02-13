/* eslint-disable quotes */
/* eslint-disable prettier/prettier */

import React, { useEffect, useRef } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createDrawerNavigator } from "@react-navigation/drawer";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Animatable from "react-native-animatable";
import Icon from "./components/Icons";
import Colors from "./constants/Colors";
import Home from "./screen/Home";
import QRScan from "./screen/QRScan";
// import 'react-native-reanimated';
// import 'react-native-gesture-handler';
const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

const TabArr = [
  {
    route: "Home",
    label: "Home",
    type: "HomeIcon",
    activeIcon: "caretup",
    inActiveIcon: "caretup",
    component: Home,
  },
  {
    route: "Like",
    label: "Like",
    type: "BellIcon",
    activeIcon: "heart-plus",
    inActiveIcon: "heart-plus-outline",
    component: QRScan,
  },
  {
    route: "Search",
    label: "Search",
    type: "HomeIcon",
    activeIcon: "timeline-plus",
    inActiveIcon: "timeline-plus-outline",
    component: QRScan,
  },
  {
    route: "Account",
    label: "Account",
    type: "UserIcon",
    activeIcon: "user-circle",
    inActiveIcon: "user-circle-o",
    component: QRScan,
  },
];

const TabButton = ({ item, onPress, accessibilityState }) => {
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current?.animate({
        0: { scale: 0.5, rotate: "360deg" },
        1: { scale: 1.3, rotate: "360deg" },
      });
    } else {
      viewRef.current?.animate({
        0: { scale: 1.3, rotate: "360deg" },
        1: { scale: 1, rotate: "360deg" },
      });
    }
  }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}
    >
      <Animatable.View ref={viewRef} duration={200}>
        <Icon
          type={item.type}
          color={focused ? Colors.primary : Colors.primaryLite}
          size={28}
        />
      </Animatable.View>
    </TouchableOpacity>
  );
};

const BottomTabNavigator = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 60,
            position: "absolute",
            margin: 5,
            borderRadius: 9,
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        {TabArr.map((item, index) => (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: (props) => <TabButton {...props} item={item} />,
            }}
          />
        ))}
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default function MainLayout() {
  return (
    // <Drawer.Navigator screenOptions={{ headerShown: false }}>
    //   <Drawer.Screen
    //     name="HomeTabs"
    //     component={BottomTabNavigator}
    //     options={{ title: "Home" }}
    //   />
    // </Drawer.Navigator>
    <SafeAreaView style={{ flex: 1 }}>
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          position: "absolute",
          margin: 5,
          borderRadius: 9,
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      {TabArr.map((item, index) => (
        <Tab.Screen
          key={index}
          name={item.route}
          component={item.component}
          options={{
            tabBarShowLabel: false,
            tabBarButton: (props) => <TabButton {...props} item={item} />,
          }}
        />
      ))}
    </Tab.Navigator>
  </SafeAreaView>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 60,
  },
});
