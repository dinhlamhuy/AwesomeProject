/* eslint-disable prettier/prettier */

import React, { useEffect, useRef } from "react";
import tw from "twrnc";

import QRScan from "../QRScan";

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon,{ Icons } from "../../components/Icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Animatable from "react-native-animatable";
import Home from "../Home";
// import  { Icon } from "react-native-paper";
const Tab = createBottomTabNavigator();
const TabArr = [
  {
    route: "Home",
    label: "Home",
    type: 'HomeIcon',
    activeIcon: "caretup",
    inActiveIcon: "caretup",
    component: Home,
  },
  {
    route: "Like",
    label: "Like",
    type: "HomeIcon",
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
    type:"HomeIcon",
    activeIcon: "user-circle",
    inActiveIcon: "user-circle-o",
    component: QRScan,
  },
];
const TabButton = (props) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate({
        0: { scale: 0.5, rotate: "0deg" },
        1: { scale: 1.5, rotate: "360deg" },
      });
    } else {
      viewRef.current.animate({
        0: { scale: 1.5, rotate: "360deg" },
        1: { scale: 1, rotate: "0deg" },
      });
    }
  }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={[styles.container, { top: 0 }]}
    >
      <Animatable.View ref={viewRef} duration={200}>
        <Icon
          type={item.type}
          //name={focused ? item.activeIcon : item.inActiveIcon}
          color={focused ? "#000" : "#637aff99"}
        />

      </Animatable.View>
    </TouchableOpacity>
  );
};
export default function BottomNav() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 60,
            position: "absolute",
            margin: 16,
            borderRadius: 16,
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        {TabArr.map((item, index) => {
          return (
            <Tab.Screen
              key={index}
              name={item.route}
              component={item.component}
              options={{
                tabBarShowLabel: false,
                tabBarButton: (props) => <TabButton {...props} item={item} />,
              }}
            />
          );
        })}
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
