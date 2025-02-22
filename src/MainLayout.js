/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */

import React, { useEffect, useRef } from "react";
import {
  Alert,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Animatable from "react-native-animatable";
import Icon from "./components/Icons";
import Colors from "./constants/Colors";
import { Home, QRScan, SettingsScreen, ProfileScreen, Pokemon } from "../src";

import tw from "twrnc";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

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
    type: "UserIcon",
    activeIcon: "heart-plus",
    inActiveIcon: "heart-plus-outline",
    component: ProfileScreen,
  },
  {
    route: "Search",
    label: "Search",
    type: "CreditCardIcon",
    activeIcon: "timeline-plus",
    inActiveIcon: "timeline-plus-outline",
    component: Pokemon,
  },
  {
    route: "Account",
    label: "Account",
    type: "Cog6ToothIcon",
    activeIcon: "user-circle",
    inActiveIcon: "user-circle-o",
    component: SettingsScreen,
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

const BottomTabNavigator = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          position: "absolute",
          top: 10,
          // left: 10,
          // right: 10,
          paddingHorizontal: 10,
          zIndex: 10,
          color: "white",
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Icon type="Bars3BottomLeftIcon" color={Colors.light} size={28} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Alert.alert("Đây là thông báo")}
          // style={tw`p-1 ml-4 rounded-lg bg-gray-100 border border-gray-300`}
        >
          <Icon type="BellIcon" color={"#fff"} />
        </TouchableOpacity>
      </View>

      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 60,
            position: "absolute",
            backgroundColor: "#000000",
            opacity: 0.95,
            margin: 0,
            bottom: 0,
            borderTopEndRadius: 5,
            borderTopLeftRadius: 5,
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

const CustomDrawerContent = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#8200d6" }}>
      <DrawerContentScrollView>
        <ImageBackground
          source={require("./assets/image/lock.png")}
          style={{ paddingTop: 30, paddingBottom: 30, height: 150 }}
        ></ImageBackground>
        <View
          style={{ flex: 1, padding: 20, backgroundColor: "#fff", height: 800 }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.closeDrawer();
              navigation.navigate("HomeTabs", { screen: "Home" });
            }}
          >
            <Text>Trang Chủ</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.closeDrawer();
              navigation.navigate("Search");
            }}
          >
            <Text>Tìm Kiếm</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.closeDrawer();
              navigation.navigate("Account");
            }}
          >
            <Text>Hồ Sơ</Text>
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
      <View style={{ backgroundColor: "#fff", padding: 20 }}>
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {/* <Ionicons name="exit-outline" size={22} /> */}
            <Text
              style={{
                fontSize: 15,
                fontFamily: "Roboto-Medium",
                marginLeft: 5,
              }}
            >
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default function MainLayout() {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false, gestureEnabled: true }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="HomeTabs"
        component={BottomTabNavigator}
        options={{ title: "Home" }}
      />
    </Drawer.Navigator>
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
