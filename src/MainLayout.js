/* eslint-disable quotes */
/* eslint-disable prettier/prettier */

import React, { useEffect, useRef } from "react";
import {
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
import Home from "./screen/Home";
import QRScan from "./screen/QRScan";

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

const BottomTabNavigator = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          position: "absolute",
          top: 10,
          left: 10,
          zIndex: 10,
          color: "white",
        }}
      >
        <TouchableOpacity onPress={() => navigation.openDrawer()} style={{}}>
          <Icon type="HomeIcon" color={Colors.primary} size={28} />
        </TouchableOpacity>
      </View>
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
      
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {/* <Ionicons name="exit-outline" size={22} /> */}
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Roboto-Medium',
                marginLeft: 5,
              }}>
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
      screenOptions={{ headerShown: false,gestureEnabled: true }}
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
